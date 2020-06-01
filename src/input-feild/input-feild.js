import React, { useState } from "react";
import StyledInputFeild from "./input-feild.styled";
import axios from "axios";

export function EmailForm(props) {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const emailToSend = email;
    const firstToSend = first;
    const lastToSend = last;
    const addressToSend = address;
    setEmail("");
    setLast("");
    setFirst("");
    setAddress("");
    alert(
      `Thanks for for submitting, ${first} ${last}, we'll keep you updated!\n(${email})\n${address}`
    );
    axios({
      method: "get",
      url:
        "https://script.google.com/macros/s/AKfycbxFni3Y1-iAoKmfQ17ABNxfaODC5vOG6oqWC0pYK6tLk6oMmv8/exec",
      params: {
        email: emailToSend,
        first: firstToSend,
        last: lastToSend,
        address: addressToSend,
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
      <div className="input-feild">
        <input
          name="first"
          id="first"
          type="text"
          className="fill-in-blank"
          placeholder="first name"
          required
          onChange={(e) => setFirst(e.target.value)}
          value={first}
        />
      </div>
      <div className="input-feild">
        <input
          name="last"
          id="last"
          type="text"
          className="fill-in-blank"
          placeholder="last name"
          required
          onChange={(e) => setLast(e.target.value)}
          value={last}
        />
      </div>
      <div className="input-feild">
        <input
          name="email"
          id="email"
          type="email"
          className="fill-in-blank"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="input-feild">
        <input
          name="address"
          id="address"
          type="text"
          className="fill-in-blank"
          placeholder="mailing address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <div className="submit-title">
        <p>Submit</p>
        <div className="submit-container">
          <div className="submit-button">
            <input
              id="send-email"
              type="submit"
              className="btn"
              title="submit"
            />
            <img
              id="roseimage"
              src={require("../photos/icons/roseicon.svg")}
              alt="rose icon"
            />
          </div>
        </div>
      </div>
    </StyledInputFeild>
  );
}

export default EmailForm;
