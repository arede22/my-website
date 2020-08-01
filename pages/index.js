import React from 'react';
import styled from 'styled-components';
// components
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '@components';
// pages
import Blog from './blog';
// styles
import { theme, GlobalStyle } from '@styles';
const { colors, fontSizes } = theme;

// styles and wrappers
const Button = styled.button`
  position: fixed;
  bottom: 20px;
  z-index: 99;
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 30px;
  font-size: ${fontSizes.sm1};

  /* color: ${props => props.theme ? 'white' : 'black'}; */
  color: white;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }
`;
const TopButton = styled(Button)`
  display: none;
  right: 30px;
  /* background-color: ${props => props.theme ? colors.cerulean : colors.orange}; */
  background-color: ${colors.cerulean};

  &:hover {
    /* background-color: ${props => props.theme ? colors.darkCerulean : colors.darkOrange}; */
    background-color: ${colors.darkCerulean};
  }

`;

const ThemeButton = styled(Button)`
  left: 30px;
  background-color: ${colors.deepSeaBlue};

  &:hover {
    background-color: ${colors.darkerDeepSeaBlue};
  }

`;

// parallax scrolling https://www.w3schools.com/howto/howto_css_parallax.asp

// blog https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs
// more personal type things: instagram, facebook, profiles and hobbies and spotify -- can add api calls here

// export main component
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />

      <Nav />

      <Welcome />
      <Intro /> {/* Courses, languages, college info -- progress bars */}
      {/* Skills acquired, desired */}
      {/* WorkExperience -- timeline w/ work and class extension projects -- assign modal script in header */}
      <Portfolio /> {/* Projects&Portfolio Interactive Tree */}
      <ContactMe />

      <Footer />

      <TopButton id="scrolltop" theme={false}>Top <img height="14" width="16" src="static/genImages/scroll-up-arrow.svg" /></TopButton>
      {/*Toggle button for light/dark themes */}
      <ThemeButton id="changeToLight">Theme</ThemeButton>

    </React.Fragment>
  )
};
