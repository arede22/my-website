import React from 'react';
import styled from 'styled-components';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components'; // '@components'
import { Courses, Softwares, Skills, Clubs, WorkExperience, Project } from '../src/components'; // '@components'
import { theme, GlobalStyle } from '../src/styles'; // '@styles'
const { colors, fontSizes } = theme;

// styles and wrappers
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
  padding: 10px 5px;
  border-radius: 15px;
  font-size: ${fontSizes.sm2};

  &:hover {
    background-color: #555;
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
      {/*Toggle button for light/dark themes */}
      <Intro /> {/* Courses, languages, college info -- progress bars */}
      {/* Skills acquired, desired */}
      {/* WorkExperience -- timeline w/ work and class extension projects -- assign modal script in header */}
      <Portfolio /> {/* Projects&Portfolio Interactive Tree */}
      <ContactMe />

      <Footer />

      <Button id="scrolltop">Top</Button>

    </React.Fragment>
  )
};
