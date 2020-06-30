import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components';
import { theme } from '../src/styles';
const { colors, fonts } = theme;

// styles and wrappers
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${fonts.Lucida};
    background-color: ${colors.bodyBackground};
  }
`;
const StyledWrapper = styled.div`
  background: ${colors.darkGray} url('../static/starting-background.png') no-repeat center;
  background-size: 100% 100%;
  overflow: auto;
`;

// export main component
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledWrapper>
        <Header />

        <Nav />

        <Welcome />
        <Intro />
        <Portfolio />
        <ContactMe />

        <Footer />

      </StyledWrapper>
    </React.Fragment>
  )
};
