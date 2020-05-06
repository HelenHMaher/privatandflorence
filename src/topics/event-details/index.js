import React from "react";

export const EventDetails = () => {
  return (
    <section id="event-details" className="topics">
      <h2 className="header">Event Details</h2>
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
      <p>
        The ceremoney will take place at{" "}
        <a
          id="stMatthewsLink"
          href="https://www.stmatthewhillsboro.org/"
          target="_blank"
        >
          St. Matthew's Church
        </a>
        . 475 SE 3rd Ave, Hillsboro, Oregon 97123 (also on{" "}
        <a
          id="stMatthewsFacebook"
          target="_blank"
          href="https://www.facebook.com/stmatthewhillsboro/"
        >
          Facebook
        </a>
        )
      </p>
      <h3 id="reception">The Reception</h3>
    </section>
  );
};

export default EventDetails;
