import React, { useState } from "react";
//import "./App.css";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import Welcome from "./welcome";
import Topics from "./topics";
import Rsvp from "./rsvp";

function App() {
  const [open, setOpen] = useState(false);

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
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
