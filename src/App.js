import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages";
import SigninPage from "./pages/signIn";
import SignupPage from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import { AuthProvider } from "./auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
          <Route path='/signup' component={SignupPage} exact />
          <PrivateRoute path='/dashboard' component={DashboardPage} exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
