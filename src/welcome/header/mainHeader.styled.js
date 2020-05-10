import styled from "styled-components";

export const StyledHeader = styled.section`
  .title {
    background-color: var(--main-red);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 2px 2px;
    max-height: 15vh;
    text-align: center;
    font-family: "Dancing Script", cursive;
    color: var(--main-white);
    text-shadow: -0.5px 0.5px 0 var(--main-grey), 1px 1px 0 black,
      1px -1px 0 var(--dark-grey), -0.5px -0.5px 0 var(--main-grey);
  }

  .title h1 {
    line-height: 0rem;
    font-size: 2.75rem;
  }

  .title p {
    font-size: 1.5rem;
  }
`;
