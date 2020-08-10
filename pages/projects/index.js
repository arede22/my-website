import React from 'react';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
// components
import { Header } from '@mainComponents';
import { theme, useDarkMode, GlobalStyle } from '@styles';
const { lightTheme, darkTheme, imgSrcs } = theme;

export default function Projects() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header title="Details on Projects" theme={themeMode} />

      <h1> Projects </h1>

      <img height='60' width='60' src={imgSrcs.rainbow} alt="spongebob rainbow" />

      <p> OG </p>

    </ThemeProvider>
  )
};