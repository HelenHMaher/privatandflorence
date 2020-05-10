import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#our-wedding">Our Wedding</a>
      <a href="#event-details">Event Details</a>
      <a href="#our-story">Our Story</a>
      <a href="#rsvp">RSVP</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
