import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// components
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '@components';
import { Toggle, TopButton } from '@components';
// pages
// import Blog from './blog';
// styles
import { theme, GlobalStyle } from '@styles';
const { colors, fontSizes, lightTheme, darkTheme } = theme;

// parallax scrolling https://www.w3schools.com/howto/howto_css_parallax.asp

// blog https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs
// more personal type things: instagram, facebook, profiles and hobbies and spotify -- can add api calls here

// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

// export main component
export default function Home() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Header />

        <Nav />

        <h1 style={{marginTop: '200px'}}>It's a {theme === 'light' ? 'light' : 'dark'} theme!</h1>

        <Welcome />
        <Intro /> {/* Courses, languages, college info -- progress bars */}
        {/* Skills acquired, desired */}
        {/* WorkExperience -- timeline w/ work and class extension projects -- assign modal script in header */}
        <Portfolio /> {/* Projects&Portfolio Interactive Tree */}
        <ContactMe />

        <Footer />

        <TopButton theme={theme} />
        <Toggle theme={theme} toggleTheme={toggleTheme} />

      </React.Fragment>
    </ThemeProvider>
  )
};
