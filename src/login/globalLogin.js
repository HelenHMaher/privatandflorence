import { createGlobalStyle } from "styled-components";
import sweetTokyo from "../photos/sweetTokyo.jpg";

export const GlobalLogin = createGlobalStyle`

html {
  font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
  background-image: url(${sweetTokyo});
  background-size: auto;
  background-repeat: no-repeat;
  display: flex;
  text-align: center;
  justify-content: center;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  html {
    background-position: 25% 0%;
    height: 100vh;
    width: 100vw;
  }
}

`;
