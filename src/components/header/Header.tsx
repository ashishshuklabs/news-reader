import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";

export const Header = () => {
  return (
    <StyledHeader>
      <h1 className="title">the news</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  max-width: 90rem;
  background: ${designVariables.palette.dark400};
  color: ${designVariables.palette.light300};
  height: 5rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  border-bottom: 1px solid ${designVariables.colorBodyText};
  position: fixed;

  .title {
    padding: 1rem 0;
    margin-bottom: 0;
    line-height: 1;
  }
  @media (max-width: 47rem) {
    .title {
      font-size: 2rem;
    }
    height: 4rem;
  }
`;
