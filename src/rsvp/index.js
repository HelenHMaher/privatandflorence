import React from "react";
import InputFeild from "../input-feild";

export const Rsvp = () => {
  return (
    <section id="rsvp" className="rsvp">
      <div className="header">
        <h2>Get Updates</h2>
      </div>
      <div className="text">
        <p>Sign up to receive updates!</p>
      </div>
      <InputFeild />
      <div className="links">
        <p>??? Facebook Group ???</p>
      </div>
    </section>
  );
};

export default Rsvp;
