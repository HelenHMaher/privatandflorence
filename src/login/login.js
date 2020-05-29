import React, { useState } from "react";
import StyledLogin from "./login.styled";
import PropTypes from "prop-types";

export function Login(props) {
  const [input, inputPassword] = useState("");
  const { clickHandler, text } = props;

  return (
    <StyledLogin className="login">
      <div className="login">
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
        <div className="alert">{text}</div>
      </div>
    </StyledLogin>
  );
}

export default Login;

Login.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
};
