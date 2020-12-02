import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../auth";
import app from "../../firebase";
import {
  Container,
  Form,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
  Text,
  FormButton
} from "./SignupElements";

const Signin = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>DATO</Icon>
          <FormContent>
            <Form onSubmit={handleSignUp}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default withRouter(Signin);

// const Signup = ({ history }) => {
//   const handleSignUp = useCallback(
//     async (event) => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;

//       try {
//         await app
//           .auth()
//           .createUserWithEmailAndPassword(email.value, password.value);
//         history.push("/dashboard");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );

//   return (
//     <div>
//       <h1>signup</h1>
//       <form onSubmit={handleSignUp}>
//         <label>
//           email
//           <input type='email' name='email' placeholder='email' />
//         </label>
//         <label>
//           password
//           <input type='password' name='password' placeholder='password' />
//         </label>
//         <button type='submit'>sign up</button>
//       </form>
//     </div>
//   );
// };

// export default withRouter(Signup);
