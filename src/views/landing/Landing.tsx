import React from "react";
import styled from "styled-components";
import { Header, Content } from "../../components";

export const Landing = () => {
  return (
    <LandingWrapper>
      <Header />
      <Content />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  position: relative;
  width: 100%;
`;
