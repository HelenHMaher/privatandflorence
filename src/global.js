import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import "https://use.fontawesome.com/releases/v5.8.2/css/all.css";
@import url("https://fonts.googleapis.com/css?family=Marck+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

:root {
  --main-black: rgb(0, 0, 0);
  --main-white: rgb(255, 255, 255);
  --opaque-white: rgba(255, 255, 255, 0.8);
  --main-red: rgb(191, 10, 48);
  --main-blue: rgba(0, 40, 104, 0.7);
  --main-grey: rgb(241, 241, 241);
  --dark-grey: rgb(100, 100, 100);
}

a {
  color: white;
  text-decoration: none;
}

html {
  background-image: url(./photos/icons/rosebackground.jpg);
  background-size: 300px;
  margin: 0;
  padding: 0;
}

.backgroundContainer {
  background: var(--main-blue);
}

.container {
  font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
}

/******** NAV BAR *******/


/***************Welcome*************/

.welcome {
  margin-top: 10vh;
  height: 90vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url(./photos/icons/engagement.jpg);
  background-position: top center;
  background-size: auto;
  background-repeat: no-repeat;
  border: 1px solid black;
}

.email {
  padding-top: 70vh;
}

form {
  z-index: 9;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.email-feild {
  display: inline-block;
}

#email {
  width: 250px;
  height: 2rem;
  font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
  font-size: 1rem;
  border: 1px solid white;
  box-shadow: 0 0 5px;
  border-radius: 10px;
  text-align: center;
}
.submit-container {
  display: inline-block;
  margin: 10px;
}

.submit-container :active {
  transition-duration: 0.3sec;
  transform: scale(0.9);
}

.submit-button {
  height: 2.2rem;
  width: 3rem;
  box-shadow: 0 0 5px black;
  border-radius: 10px;
  background: var(--main-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#roseimage {
  height: 2rem;
  position: absolute;
  opacity: 0.5;
}

#send-email {
  z-index: 8;
  opacity: 0;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}

/***********topics*************/

.topics {
  background: var(--opaque-white);
  margin: 2rem 3.5rem;
  border-radius: 1rem;
}

.topics > p {
  padding: 0 2rem 2rem 2rem;
  text-align: justify;
}

.topics > .header {
  font-size: 3rem;
  text-align: center;
  padding-top: 2rem;
  font-family: "Dancing Script", cursive;
  color: var(--main-white);
  text-shadow: -0.5px 0.5px 0 var(--dark-grey), 1px 1px 0 var(--dark-grey),
    1px -1px 0 var(--main-grey), -0.5px -0.5px 0 var(--main-grey);
}

/*********RSVP***********/

.rsvp {
  color: white;
  text-align: center;
}

/*********footer*********/

footer {
  padding-bottom: 10px;
  padding-left: 10px;
  color: white;
}


`;
