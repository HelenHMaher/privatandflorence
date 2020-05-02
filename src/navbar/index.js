import React from "react";

export const NavBar = () => {
  return (
    <nav id="navbar" className="nav">
      <ul className="nav-list">
        <li className="title">
          <h1>Privat & Florence</h1>
          <p>August 21, 2021</p>
        </li>
        <li>
          <a href="#welcome">
            <img
              src={require("../photos/icons/whiterose.svg")}
              alt="Home"
              id="roseicon"
            />
          </a>
        </li>
        <li>
          <a href="./#our-wedding">Our Wedding</a>
        </li>
        <li>
          <a href="./#event-details">Event Details</a>
        </li>
        <li>
          <a href="./#our-story">Our Story</a>
        </li>
        <li>
          <a href="./#rsvp">RSVP</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
