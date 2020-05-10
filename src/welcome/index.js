import React from "react";
import MainHeader from "./header";
import InputEmail from "../input-feild";

export const Welcome = () => {
  return (
    <section id="welcome" className="welcome">
      <MainHeader />
      <div className="email">
        <InputEmail />
      </div>
    </section>
  );
};

export default Welcome;
