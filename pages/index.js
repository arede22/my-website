import React from 'react';
import styled from 'styled-components';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components';
import { theme } from '../src/styles';
const { colors, fonts, fontSizes, displays } = theme;
// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const StyledWrapper = styled.div`
  background: ${colors.darkGray} url('../static/starting-background.png') no-repeat center;
  background-size: 100% 100%;
  overflow: auto;
`;

// export main component
export default function Home() {
  return (
    <StyledWrapper>
      <Header />

      <Nav />

      <Welcome />
      <Intro />
      <Portfolio />
      <ContactMe />

      <Footer />

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: ${fonts.Lucida};
          background-color: ${colors.bodyBackground};
          padding-top: 60px;
        }
      `}</style>

    </StyledWrapper>
  )
};
