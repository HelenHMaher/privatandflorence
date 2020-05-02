import React from "react";
import "./App.css";
import OurStory from "./topics/our-story";
import Welcome from "./welcome";
import OurWedding from "./topics/our-wedding";
import EventDetails from "./topics/event-details";
import Rsvp from "./rsvp";

function App() {
  return (
    <div className="backgroundContainer">
      <div className="container">
        <Welcome />

        <OurWedding />

        <EventDetails />

        <OurStory />

        <Rsvp />

        <footer>
          <p>2020 Helen Maher</p>
          <a href="https://www.freepik.com/free-photos-vectors/pattern">
            Pattern vector created by lukasdedi - www.freepik.com
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;