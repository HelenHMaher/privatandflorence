import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
