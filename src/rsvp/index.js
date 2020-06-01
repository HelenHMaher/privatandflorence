import React from "react";
import InputFeild from "../input-feild";
import FacebookIcon from "../photos/icons/facebook-icon-128 (1).png";

export const Rsvp = () => {
  return (
    <section id="rsvp" className="rsvp">
      <div className="link-spacer">
        <br />
      </div>
      <div className="header">
        <h2>Get Updates</h2>
      </div>
      <div className="text">
        <p>Sign up to receive updates!</p>
      </div>
      <InputFeild />
      <div className="links">
        Join the Facebook group
        <a
          id="facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="facebook icon"
            src={FacebookIcon}
            height="40px"
            width="40px"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Rsvp;
