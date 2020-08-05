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

const PersonalInfo = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: none;
  }
`;

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
      <Header title="Anika Rede: Software Engineer" />

      <Nav theme={themeMode}/>

      <Welcome theme={themeMode} />
      <Intro theme={themeMode} />
      <Portfolio theme={themeMode} />
      <ContactMe theme={themeMode} />

      <Footer theme={themeMode} />

      <TopButton theme={theme} />
      <Toggle theme={theme} toggleTheme={toggleTheme} />

      <PersonalInfo />

    </ThemeProvider>
  )
};
