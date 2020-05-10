import React from "react";
import { StyledHeader } from "./mainHeader.styled";

export const MainHeader = () => {
  return (
    <StyledHeader id="mainHeader" className="mainHeader">
      <div className="title">
        <h1>Privat & Florence</h1>
        <p>August 21, 2021</p>
      </div>
    </StyledHeader>
  );
};

export default MainHeader;
