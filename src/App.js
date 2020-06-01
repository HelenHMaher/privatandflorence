import React, { useState, useRef } from "react";
//import "./App.css";
import { GlobalStyles } from "./global";
import { StyledLogin } from "./login/gStyledLogin";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import Welcome from "./welcome";
import Topics from "./topics";
import Rsvp from "./rsvp";
import Login from "./login";
import { useOnClickOutside } from "./components/hooks";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [password, setPassword] = useState(null);
  function handleSubmit(input) {
    setPassword(input);
  }

  /*if (!password) {
    return (
      <ThemeProvider theme={theme}>
        <StyledLogin>
          <Login clickHandler={handleSubmit} text="" />
        </StyledLogin>
      </ThemeProvider>
    );
  } else if (password !== "gaboregon") {
    return (
      <ThemeProvider theme={theme}>
        <StyledLogin>
          <Login clickHandler={handleSubmit} text="Incorrect Password" />
        </StyledLogin>
      </ThemeProvider>
    );
  } else {*/
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="backgroundContainer">
          <div className="container">
            <Welcome />

            <Topics />

            <Rsvp />

            <footer>
              <p>2020 Helen Maher</p>
              <a href="https://www.freepik.com/free-photos-vectors/pattern">
                Pattern vector by lukasdedi - www.freepik.com
              </a>
            </footer>
          </div>
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
  //}
}

export default App;
