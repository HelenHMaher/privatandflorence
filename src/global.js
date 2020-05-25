import { createGlobalStyle } from "styled-components";
import roseBackground from "./photos/icons/rosebackground.jpg";

export const GlobalStyles = createGlobalStyle`


:root {
  --opaque-white: rgba(255, 255, 255, 0.8);
  --main-red: rgb(191, 10, 48);
  --strong-blue: rgba(0, 40, 104, 0.9);
  --main-blue: rgba(0, 40, 104, 0.7);
  --blue: rgba(0, 20, 84);
  --dark-grey: rgb(100, 100, 100);
}

a {
  color: white;
  text-decoration: none;
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


.topics {
  background: var(--opaque-white);
  margin: 2rem 3.5rem;
  border-radius: 1rem;
  padding: 2rem;
}

.topics > p {
  padding: 0 2rem 2rem 2rem;
  text-align: justify;
}

.topics > .header {
  font-size: 3rem;
  text-align: center;
  padding-top: 2rem;
  font-family: cursive;
  color: var(--main-blue);
}

.rsvp {
  color: white;
  text-align: center;
}

footer {
  padding-bottom: 10px;
  padding-left: 10px;
  color: white;
}


`;
