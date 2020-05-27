import React from "react";
import InputFeild from "../input-feild";

export const Rsvp = () => {
  return (
    <section id="rsvp" className="rsvp">
      <div className="header">
        <h2>RSVP</h2>
      </div>
      <div className="text">
        <p>Sign up to receive updates!</p>
      </div>
      <InputFeild />
      <div className="links">??? Facebook Group ???</div>
    </section>
  );
};

export default Rsvp;
