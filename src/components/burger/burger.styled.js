import styled from "styled-components";

export const StyledBurger = styled.button`
  position: fixed;
  top: 2rem;
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

  &:hover {
    opacity: 0.7;
    transition-duration: 0.3sec;
  }

  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.9);
    opacity: 0.5;
    transition-duration: 0.5sec;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 0.5rem;
  }

  img {
    width: 5rem;
  }
`;
