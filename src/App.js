import React from "react";
import "./App.css";

function App() {
  return (
    <div class="container">
      <nav id="navbar" class="nav">
        <ul class="nav-list">
          <li>
            <a href="#welcome">
              <img src="whiterose.svg" alt="Home" id="roseicon" />
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

      <section id="welcome" class="welcome">
        <div class="grid">
          <div class="title">
            <h1>Privat and Florence</h1>
            <p>August 21, 2021</p>
          </div>
          <div class="main-image">
            <figure id="main-image">
              <img
                id="image"
                src="./photos/engagement.jpg"
                alt="Florence and Private on their engagement"
              />
            </figure>
          </div>
        </div>
        <div class="email">
          <form id="form" action="__">
            <input
              name="email"
              id="email"
              type="email"
              class="fill-in-blank"
              placeholder="enter your email receive updates"
              required
            />
            <input id="submit" type="submit" value="submit" class="btn" />
          </form>
        </div>
      </section>

      <section id="wedding" class="topics">
        <h2 class="wedding-header">Our Wedding</h2>
        <p>dates, times, locations, dress code, registry</p>
      </section>

      <section id="detials" class="topics">
        <h2 class="details-header">Event Details</h2>
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

      <section id="story" class="topics">
        <h2 class="story-header">Our Story</h2>
        <p> Our beautiful love story.</p>
      </section>

      <section id="rsvp" class="rsvp">
        <div class="rsvp-header">
          <h2>RSVP</h2>
        </div>
        <div class="rsvp-content">
          <p>Sign up to receive updates!</p>
        </div>
        <div class="rsvp-links">
          <a
            id="profile-link"
            href="mailto:helenhmaher@gmail.com"
            target="_blank"
            class="rsvp-btn"
          >
            <i class="fas fa-at"></i>Email
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
