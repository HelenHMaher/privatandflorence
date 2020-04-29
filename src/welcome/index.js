import React from "react";

export const Welcome = () => {
  return (
    <section id="welcome" className="welcome">
      <div className="grid">
        <div className="main-image">
          <figure id="main-image">
            <img
              id="engagement-photo"
              src={require("../photos/engagementPhoto.jpg")}
              alt="Florence and Private on their engagement"
            />
          </figure>
        </div>

        <div className="title">
          <h1>Privat and Florence</h1>
          <p>August 21, 2021</p>
        </div>
      </div>
      <div className="email">
        <form id="form" action="__">
          <div className="email-feild">
            <input
              name="email"
              id="email"
              type="email"
              className="fill-in-blank"
              placeholder="enter your email to receive updates"
              required
            />
          </div>
          <div className="submit-button">
            <input
              id="send-email"
              type="submit"
              value=""
              className="btn"
              title="submit"
            />
            <img
              id="roseimage"
              onclick="submitForm()"
              src={require("../photos/roseicon.svg")}
              alt="rose icon"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Welcome;
