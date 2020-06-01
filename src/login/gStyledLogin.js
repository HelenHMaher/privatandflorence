import styled from "styled-components";
import sweetTokyo from "../photos/sweet-tokyo-Jan.jpeg";

export const StyledLogin = styled.section`
  font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
  background-image: url(${sweetTokyo});
  background-color: #444343;
  background-size: auto;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-position: 25% 0%;
  }
`;

export default StyledLogin;
