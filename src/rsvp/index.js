import React from "react";
import InputEmail from "../input-feild";

export const Rsvp = () => {
  return (
    <section id="rsvp" className="rsvp">
      <div className="header">
        <h2>RSVP</h2>
      </div>
      <div className="text">
        <p>Sign up to receive updates!</p>
      </div>
      <InputEmail />
      <div className="rsvp-links">
        <a
          id="profile-link"
          href="mailto:helenhmaher@gmail.com"
          target="_blank"
          className="rsvp-btn"
        >
          <i className="fas fa-at"></i>Email
        </a>
      </div>
    </section>
  );
};

export default Rsvp;
