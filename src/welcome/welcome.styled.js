import styled from "styled-components";
import engagementPhoto from "../photos/icons/engagement.jpg";

export const StyledWelcome = styled.section`
  margin-top: 10vh;
  height: 90vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url(${engagementPhoto});
  background-position: top center;
  background-size: auto;
  background-repeat: no-repeat;
  border: 1px solid black;

  .email {
    padding-top: 70vh;
  }
`;
