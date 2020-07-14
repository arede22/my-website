import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components'; // '@components'
import { Courses, Softwares, Skills, Clubs, WorkExperience, Project } from '../src/components'; // '@components'
import { theme, media } from '../src/styles'; // '@styles'
const { colors, fonts, imgSrcs, fontSizes } = theme;

// styles and wrappers
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    color: white;
    background-color: ${colors.darkGray}
  }
`;
const StyledWrapper = styled.div`
  background: ${colors.darkGray} url(${imgSrcs.backgroundImg}) no-repeat center;
  background-size: 100% 100%;
  /* overflow: auto; */

  @media (max-width: 600px) {
    background: ${colors.darkGray} url(${imgSrcs.backgroundImgSm}) no-repeat center;
    background-size: 100% 100%;
  }

  /* @media ${media.laptop} {
    max-width: 800px;
  }

  @media ${media.laptopL} {
    max-width: 1000px;
  }

  @media ${media.desktop} {
    max-width: 1200px;
  } */
`;
const Button = styled.button`
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */

  &:hover {
    background-color: #555;
  }
`;

// export main component
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledWrapper id="body">
        <Header />

        {/*<Courses />
        <Softwares />
        <Skills />
        <Clubs />
        <WorkExperience />
        <Project />*/}
        {/*
          Header/Navbar
          Welcome
          Intro (progress bars)
          Work Experience (timeline)
          Skills (wanted, needed)
          Projects&Portfolio Interactive Tree
          ContactMe
          Footer
          */}

        <Nav />

        <Welcome />
        <Button id="scrolltop" title="Go to top">Top</Button>
        <Intro />
        <Portfolio />
        <ContactMe />

        <Footer />

      </StyledWrapper>
    </React.Fragment>
  )
};
