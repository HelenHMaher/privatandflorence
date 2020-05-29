import React, { useState } from "react";
import StyledLogin from "./login.styled";

export function EmailForm(props) {
    return(
        <StyledLogin>
            /*function Login() {
  const [password, inputPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const confirmPassword = "admin";
    if (password === confirmPassword) {
      window.location = "./home";
    } else {
      alert("Passwords do not match.");
    }
  };
  return (
    <div className="login">
      <label for="pswd">Enter your password: </label>
      <input
        type="password"
        id="pswd"
        onChange={(e) => inputPassword(e.target.value)}
        value={password}
      />
      <input
        type="submit"
        title="submit"
        className="btn"
        onClick={handleSubmit}
      />
    </div>
  );
}*/


        </StyledLogin>
    )
}