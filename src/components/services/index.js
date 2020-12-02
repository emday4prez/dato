import React from "react";
import Icon1 from "../../images/Private.svg";
import Icon2 from "../../images/plan.svg";
import Icon3 from "../../images/Chatting.svg";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Video Updates</ServicesH2>
          <ServicesP>Private insight into crypto price & trends.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Custom Charts</ServicesH2>
          <ServicesP>
            You can acess our platform when youre taking a shit
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock our special membership promotion.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
