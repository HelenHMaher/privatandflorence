import styled from "styled-components";

const StyledLogin = styled.section`
  .login {
    background-color: white;
    box-shadow: 0 0 5px black;
    height: 75px;
    width: 400px;
    margin-top: 30vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 20px;
  }

  .alert {
    text-align: center;
    color: red;
    font-style: italic;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-position: 20% 0%;
    .login {
      width: 300px;
    }
  }
`;

export default StyledLogin;
