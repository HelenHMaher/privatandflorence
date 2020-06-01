import React from "react";
import MainHeader from "./header";
import { StyledWelcome } from "./welcome.styled";

const Welcome = () => {
  return (
    <StyledWelcome id="welcome" className="welcome">
      <MainHeader />
      <div className="email">
        <a href="#rsvp">Get Updates</a>
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
