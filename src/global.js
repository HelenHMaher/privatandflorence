import { createGlobalStyle } from "styled-components";
import roseBackground from "./photos/icons/rosebackground.jpg";

export const GlobalStyles = createGlobalStyle`


:root {
  --opaque-white: rgba(255, 255, 255, 0.8);
  --main-red: rgb(191, 10, 48);
  --strong-blue: rgba(0, 40, 104, 0.9);
  --main-blue: rgba(0, 40, 104, 0.7);
  --blue: #4c5a87;
  --dark-grey: rgb(100, 100, 100);
}

html {
  background-image: url(${roseBackground});
  background-size: 300px;
  margin: 0;
  padding: 0;
}

.backgroundContainer {
  position: absolute;
  background: var(--main-blue);
  left: 0;
  top: 0;
}

.container {
  font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
}

.rsvp {
  color: white;
  text-align: center;
  .header{
    font-size: 3rem;
    font-family: "Snell Roundhand", cursive;
    line-height: 4rem;
  }
}

footer {
  margin-top: 200px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: white;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  footer a {
    font-size: 10px;
  }
}

footer a {
  color: white;
  text-shadow: none;
  text-decoration: none;
  font-size: 14px;
}

footer a:hover {
  text-decoration: underline;
}


`;
