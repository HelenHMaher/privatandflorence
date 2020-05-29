import styled from "styled-components";
import sweetTokyo from "../photos/sweetTokyo.jpg";

const StyledLogin = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  background-image: url(${sweetTokyo});
  background-size: auto;
  background-repeat: no-repeat;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-position: 0% 50%;
  }

  .login {
    background-color: white;
    height: 200px;
    width: 400px;
    margin: auto;
    margin-top: 10vh;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .login {
      width: 200px;
    }
  }
  .alert {
    color: var(--main-red);
  }
`;

export default StyledLogin;
