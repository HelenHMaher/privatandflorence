import styled from "styled-components";

export const StyledHeader = styled.section`
  .title {
    text-align: center;
    background-color: var(--main-red);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 2px 2px;
    height: 15vh;
    font-family: cursive;
    color: white;
    display: flex;
    align-items: center;
    letter-spacing: 0.5rem;
  }

  .title h1 {
    position: absolute;
    font-size: 2.75rem;
    padding: 0.5rem 0;
    line-height: 2.5rem;
    margin: auto;
  }

  .title p {
    font-size: 1.5rem;
    display: block;
    line-height: 2.5rem;
    padding-top: 1rem;
    right: 10px;
  }
`;
