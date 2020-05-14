import styled from "styled-components";

export const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  &:active {
    opacity: 0.5;
    transition-duration: 0.3sec;
  }

  img {
    width: 5rem;
  }
`;
