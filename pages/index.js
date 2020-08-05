import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// components
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '@mainComponents';
import { Toggle, TopButton } from '@components';
// pages
import Blog from './blog';
// styles
import { theme, useDarkMode, GlobalStyle } from '@styles';
const { colors, fontSizes, lightTheme, darkTheme } = theme;

// blog https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs
// more personal type things: instagram, facebook, profiles and hobbies and spotify -- can add api calls here

// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

// export main component
export default function Home() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme: darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header />

      <Nav theme={theme}/>

      <Welcome theme={theme} />
      <Intro theme={theme} />
      <Portfolio theme={theme} />
      <ContactMe theme={theme} />

      <Footer theme={theme} />

      <TopButton theme={theme} />
      <Toggle theme={theme} toggleTheme={toggleTheme} />

    </ThemeProvider>
  )
};
