import React from "react";
import MainHeader from "./header";
import InputFeild from "../input-feild";

export const Welcome = () => {
  return (
    <section id="welcome" className="welcome">
      <MainHeader />
      <div className="email">
        <InputFeild />
      </div>
    </section>
  );
};

export default Welcome;
