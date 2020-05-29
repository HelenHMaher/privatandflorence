import React, { useState } from "react";
import StyledLogin from "./login.styled";

export function Login(props) {
  const [input, inputPassword] = useState("");
  const clickHandler = props.clickHandler;

  return (
    <StyledLogin className="login">
      <label for="pswd">Enter your password: </label>
      <input
        type="password"
        id="pswd"
        onChange={(e) => inputPassword(e.target.value)}
        value={input}
      />
      <input
        type="submit"
        title="submit"
        className="btn"
        onClick={(e) => clickHandler(input)}
      />
    </StyledLogin>
  );
}

export default Login;
