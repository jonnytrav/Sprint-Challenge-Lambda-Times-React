import React from "react";
// import { ToastHeader } from "reactstrap";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;
const DateSpan = styled.span`
  margin-left: 25px;
  flex: 1;
`;
const TempSpan = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <TempSpan>98°</TempSpan>
    </StyledHeader>
  );
};

export default Header;
