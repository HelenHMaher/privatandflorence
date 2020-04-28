import React from "react";
import "./App.css";
import OurStory from "./our-story";
import NavBar from "./navbar";
import Welcome from "./welcome";
import OurWedding from ".our-wedding";
import EventDetails from "./event-details";
import Rsvp from "./rsvp";

function App() {
  return (
    <div className="container">
      <NavBar />

      <Welcome />

      <OurWedding />

      <EventDetails />

      <OurStory />

      <Rsvp />

      <footer>
        <p>2020 Helen Maher</p>
      </footer>
    </div>
  );
}

export default App;
