import React from "react";
import StoryText from "./story-text";
import { StyledTopics } from "../topics.styled";

export const OurStory = () => {
  return (
    <StyledTopics>
      <section id="our-story" className="topics">
        <h2 className="header">Our Story</h2>
        <StoryText />
      </section>
    </StyledTopics>
  );
};

export default OurStory;
