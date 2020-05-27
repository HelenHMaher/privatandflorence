import React from "react";
import OurWedding from "./our-wedding";
import EventDetails from "./event-details";
import OurStory from "./our-story";

const Topics = ({ open }) => {
  return (
    <div className="topics">
      <OurWedding />
      <EventDetails />
      <OurStory />
    </div>
  );
};

export default Topics;
