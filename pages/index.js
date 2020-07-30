import React from 'react';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components'; // '@components'
import { Courses, Softwares, Skills, Clubs, WorkExperience, Project } from '../src/components'; // '@components'
import { GlobalStyle } from '../src/styles'; // '@styles'

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
// Skills (wanted, needed)
// Work Experience (timeline)
// Projects&Portfolio Interactive Tree
// ContactMe
// Footer

// parallax scrolling https://www.w3schools.com/howto/howto_css_parallax.asp

// blog https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs

// <Button id="scrolltop">Top</Button> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Toggle button for light/dark themes

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
      {/* Timeline w/ work and class extension projects -- assign script in header */}
      <Portfolio /> {/* Tree of projects and portfolio */}
      <ContactMe />

      <Footer />

      <Button id="scrolltop">Top</Button>

    </React.Fragment>
  )
};
