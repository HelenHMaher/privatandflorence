import React from "react";
import NavBar from "../navbar";
import InputEmail from "../input-feild";

export const Welcome = () => {
  return (
    <section id="welcome" className="welcome">
      <NavBar />
      <div className="email">
        <InputEmail />
      </div>
    </section>
  );
};

export default Welcome;
