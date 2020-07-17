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
    background: ${colors.darkGray} url(${imgSrcs.backgroundImg}) repeat-y center;

    @media (max-width: 600px) {
      background: ${colors.darkGray} url(${imgSrcs.backgroundImgSm}) repeat-y center;
    }

    // @media ${media.laptop} {
    //   max-width: 800px;
    // }
    //
    // @media ${media.laptopL} {
    //   max-width: 1000px;
    // }
    //
    // @media ${media.desktop} {
    //   max-width: 1200px;
    // }
  }
  h1, h2, h3, h4 {
   font-family: ${fonts.Oswald};
   text-transform: uppercase;
   text-shadow: black 2px 2px;
  }
  h1 {
    font-size: ${fontSizes.lg};

    @media (max-width: 600px) {
      font-size: ${fontSizes.med2};
    }
  }
  h2 {
    font-size: ${fontSizes.med2};

    @media (max-width: 600px) {
      font-size: ${fontSizes.med1};
    }
  }
  h3 {
    font-size: ${fontSizes.med1};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm3};
    }
  }
  h4 {
    font-size: ${fontSizes.sm3};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm2};
    }
  }
  h5 {
    font-size: ${fontSizes.sm2};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm1};
    }
  }
  p {
    font-size: ${fontSizes.sm1};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm0};
    }
  }
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

// <Button id="scrolltop">Top</Button>

// export main component
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />

      <Nav />

      <Welcome />
      {/*<Button id="scrolltop">Top</Button>*/}
      <Intro /> {/* Courses, languages, college info -- progress bars */}
      {/* Timeline w/ work and class extension projects */}
      {/* Skills acquired, desired */}
      <Portfolio /> {/* Tree of projects and portfolio */}
      <ContactMe />

      <Footer />

    </React.Fragment>
  )
};
