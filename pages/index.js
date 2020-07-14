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
    font-family: ${fonts.Lucida}; /* was ${fonts.Lucida}*/
    color: white;
    background-color: ${colors.darkGray};
  }
  h1, h2, h3, h4, h5, h6 { /* just added*/
   font-family: ${fonts.Oswald};
   text-transform: uppercase;
  }
`;
const StyledWrapper = styled.div`
  background: ${colors.darkGray} url(${imgSrcs.backgroundImg}) repeat-y center; /* background-repeat: repeat-y*/
  /* background-attachment: fixed; */
  /* background-size: 100% 100%; */
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
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;

  &:hover {
    background-color: #555;
  }
`;

// Header/Navbar
// Welcome
// Intro (progress bars)
// Work Experience (timeline)
// Skills (wanted, needed)
// Projects&Portfolio Interactive Tree
// ContactMe
// Footer

// <Courses />
// <Softwares />
// <Skills />
// <Clubs />
// <WorkExperience />
// <Project />


// export main component
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledWrapper id="body">
        <Header />

        <Nav />

        <Welcome />
        <Button id="scrolltop">Top</Button>
        <Intro />
        <Portfolio />
        <ContactMe />

        <Footer />

      </StyledWrapper>
    </React.Fragment>
  )
};
