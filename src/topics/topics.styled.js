import styled from "styled-components";

export const StyledTopics = styled.section`
  background: var(--opaque-white);
  margin: 2rem 3.5rem;
  border-radius: 1rem;
  padding: 2rem;
  font-size: 18px;

  p {
    padding: 0 2rem 2rem 2rem;
    text-align: justify;
  }

  .header {
    font-size: 3rem;
    text-align: center;
    padding-top: 2rem;
    font-family: cursive;
    color: var(--main-blue);
  }

  a {
    color: var(--main-blue);
    text-decoration: none;
    text-shadow: 0 0 1px white;
  }

  a:hover {
    color: var(--main-red);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 2rem 1rem;
    padding: 0.5rem;
    p {
      padding: 0 0.5rem 0.5rem 0.5rem;
    }
    .header {
      font-size: 2rem;
      padding-top: 0.5rem;
    }
  }
`;
