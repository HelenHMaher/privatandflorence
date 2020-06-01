import React from "react";
import OurWedding from "./our-wedding";
import EventDetails from "./event-details";
import OurStory from "./our-story";

const Topics = ({ open }) => {
  return (
    <div className="topics">
      <div id="our-wedding" className="linkHolder">
        <br />
        <br />
      </div>
      <OurWedding />
      <div id="event-details" className="linkHolder">
        <br />
        <br />
      </div>
      <EventDetails />
      <div id="our-story" className="linkHolder">
        <br />
        <br />
      </div>
      <OurStory />
    </div>
  );
};

export default Topics;
