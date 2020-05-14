import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./burger.styled";
import whiteRose from "/Users/jbmaher/dev/privatandflorence/src/photos/icons/whiterose.svg";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <img id="roseimage" src={whiteRose} alt="rose icon" />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
