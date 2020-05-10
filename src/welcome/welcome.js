import React from "react";
import MainHeader from "./header";
import InputFeild from "../input-feild";
import { StyledWelcome } from "./welcome.styled";

const Welcome = () => {
  return (
    <StyledWelcome id="welcome" className="welcome">
      <MainHeader />
      <div className="email">
        <InputFeild />
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
