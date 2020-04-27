import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#welcome">
              <img src="%PUBLIC_URL%/whiterose.svg" alt="Home" id="roseicon" />
            </a>
          </li>
          <li>
            <a href="#wedding">Our Wedding</a>
          </li>
          <li>
            <a href="#details">Details</a>
          </li>
          <li>
            <a href="#story">Our Story</a>
          </li>
          <li>
            <a href="#rsvp">RSVP</a>
          </li>
        </ul>
      </nav>

      <section id="welcome" className="welcome">
        <div className="grid">
          <div className="title">
            <h1>Privat and Florence</h1>
            <p>August 21, 2021</p>
          </div>
          <div className="main-image">
            <figure id="main-image">
              <img
                id="image"
                src="%PUBLIC_URL%/photos/engagement.jpg"
                alt="Florence and Private on their engagement"
              />
            </figure>
          </div>
        </div>
        <div className="email">
          <form id="form" action="__">
            <input
              name="email"
              id="email"
              type="email"
              className="fill-in-blank"
              placeholder="enter your email receive updates"
              required
            />
            <input id="submit" type="submit" value="submit" className="btn" />
          </form>
        </div>
      </section>

      <section id="wedding" className="topics">
        <h2 className="wedding-header">Our Wedding</h2>
        <p>dates, times, locations, dress code, registry</p>
      </section>

      <section id="detials" className="topics">
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

      <section id="story" className="topics">
        <h2 className="story-header">Our Story</h2>
        <p> Our beautiful love story.</p>
      </section>

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
        <p>&copy; 2020, Helen Maher</p>
      </footer>
    </div>
  );
}

export default App;
