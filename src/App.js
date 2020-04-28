import React from "react";
import "./App.css";
import OurStory from "./our-story";
import NavBar from "./navbar";
import Welcome from "./welcome";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Welcome />

      <section id="our-wedding" className="topics">
        <h2 className="wedding-header">Our Wedding</h2>
        <p>dates, times, locations, dress code, registry</p>
      </section>

      <section id="event-detials" className="topics">
        <h2 className="details-header">Event Details</h2>
        <ul id="detailsnav">
          <li>
            <a href="#hillsboro">Travel and Accomodations</a>
          </li>
          <li>
            <a href="#ceremoney">The Ceremoney</a>
          </li>
          <li>
            <a href="#reception">The Reception</a>
          </li>
        </ul>
        <h3 id="hillsboro">Travel and Accomodations</h3>
        <h3 id="ceremoney">The Ceremoney</h3>
        <h3 id="reception">The Reception</h3>
      </section>

      <OurStory />

      <section id="rsvp" className="rsvp">
        <div className="rsvp-header">
          <h2>RSVP</h2>
        </div>
        <div className="rsvp-content">
          <p>Sign up to receive updates!</p>
        </div>
        <div className="rsvp-links">
          <a
            id="profile-link"
            href="mailto:helenhmaher@gmail.com"
            target="_blank"
            className="rsvp-btn"
          >
            <i className="fas fa-at"></i>Email
          </a>
        </div>
      </section>

      <footer>
        <p>2020 Helen Maher</p>
      </footer>
    </div>
  );
}

export default App;
