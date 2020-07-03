import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components'; // '@components'
import { theme } from '../src/styles'; // '@styles'
const { colors, fonts, imgSrcs, fontSizes } = theme;

// styles and wrappers
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    color: white;
  }
`;
const StyledWrapper = styled.div`
  background: ${colors.darkGray} url(${imgSrcs.backgroundImg}) no-repeat center;
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
