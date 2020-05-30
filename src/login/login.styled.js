import styled from "styled-components";
import sweetTokyo from "../photos/sweetTokyo.jpg";

const StyledLogin = styled.section`
  font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  background-image: url(${sweetTokyo});
  background-size: auto;
  background-repeat: no-repeat;

  .login {
    background-color: white;
    box-shadow: 0 0 5px black;
    height: 75px;
    width: 400px;
    margin: auto;
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
  }

  .alert {
    text-align: center;
    color: red;
    font-style: italic;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .login {
      background: green;
    }
  }
`;

export default StyledLogin;
