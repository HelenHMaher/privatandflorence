import React from "react";

export const InputEmail = () => {
  return (
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
            src={require("../photos/roseicon.svg")}
            alt="rose icon"
          />
        </div>
      </div>
    </form>
  );
};

export default InputEmail;
