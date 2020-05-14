import React, { useState } from "react";
import StyledInputFeild from "./input-feild.styled";
import axios from "axios";

export function EmailForm(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const emailToSend = email;
    setEmail("");
    alert("Thanks for for submitting, we'll keep you updated!");
    axios({
      method: "get",
      url:
        "https://script.google.com/macros/s/AKfycbxFni3Y1-iAoKmfQ17ABNxfaODC5vOG6oqWC0pYK6tLk6oMmv8/exec",
      params: {
        email: emailToSend,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <StyledInputFeild id="form" action="__" onSubmit={handleSubmit}>
      <div className="email-feild">
        <input
          name="email"
          id="email"
          type="email"
          className="fill-in-blank"
          placeholder="enter your email to receive updates"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="submit-container">
        <div className="submit-button">
          <input id="send-email" type="submit" className="btn" title="submit" />
          <img
            id="roseimage"
            src={require("../photos/icons/roseicon.svg")}
            alt="rose icon"
          />
        </div>
      </div>
    </StyledInputFeild>
  );
}

export default EmailForm;
