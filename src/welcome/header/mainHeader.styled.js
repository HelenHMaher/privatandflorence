import styled from "styled-components";

export const StyledHeader = styled.section`
  .title {
    text-align: center;
    background-color: var(--main-red);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 2px 2px;
    font-family: cursive;
    color: white;
    width: 100%;
    height: 6.5rem;
    align-items: center;
    letter-spacing: 0.5rem;
  }

  .title h1 {
    font-size: 2.75rem;
    background: green;
    position: absolute;
    width: 100%;
    top: 0;
    line-height: 0px;
  }

  .title p {
    font-size: 1.5rem;
    position: absolute;
    top: 2.2rem;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .title {
      letter-spacing: 0.1rem;
    }
    .title h1 {
      top: 1rem;
      font-size: 2rem;
      right: 0;
      width: 80%;
    }
    .title p {
      top: 3.2rem;
      font-size: 1rem;
      width: 80%;
      right: 0;
    }
  }
`;
