import React from "react";
import NavBar from "../navbar";

export const Welcome = () => {
  return (
    <section id="welcome" className="welcome">
      <NavBar />
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
          <div className="submit-container">
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
                /*onclick="submitForm()"*/
                src={require("../photos/whiterose.svg")}
                alt="rose icon"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Welcome;
