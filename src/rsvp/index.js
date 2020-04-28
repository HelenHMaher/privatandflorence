import React from "react";

export const Rsvp = () => {
  return (
    <section id="rsvp" className="rsvp">
      <div className="rsvp-header">
        <h2>RSVP</h2>
      </div>
      <div className="rsvp-content">
        <p>Sign up to receive updates!</p>
      </div>
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
