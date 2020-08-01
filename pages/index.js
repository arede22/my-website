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
  color: white;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }
`;
const TopButton = styled(Button)`
  display: none;
  right: 30px;
  background-color: ${( {props} ) => theme ? colors.cerulean : colors.palePink };

  &:hover {
    background-color: ${( {props} ) => theme ? colors.darkCerulean : colors.darkPalePink };
  }

`;
const ThemeButton = styled(Button)`
  left: 30px;
  background-color: ${( props ) => props.theme ? colors.deepSeaBlue : colors.palePink };

  &:hover {
    background-color: ${( props ) => props.theme ? colors.darkerDeepSeaBlue : colors.darkPalePink };
  }

`;
const Toggle = styled.label`
  position: fixed;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 99;
  bottom: 30px;
  left: 30px;
  font-size: ${fontSizes.sm0};
  text-align: center;
  line-height: 2;
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${colors.deepSeaBlue};
  }

  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  &:focus {
    box-shadow: 0 0 1px ${colors.deepSeaBlue};
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.palePink};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:checked {
    background-color: ${colors.deepSeaBlue};
  }

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
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

      {/*set theme to false somehow to figure out the toggling*/}
      <TopButton id="scrolltop">Top <img height="14" width="16" src="static/genImages/scroll-up-arrow.svg" /></TopButton>
      {/*Toggle button for light/dark themes */}
      <ThemeButton id="changeToLight">Theme</ThemeButton>

      {/*<Toggle>
        <Input type="checkbox" id="changeToLight" />
        <Slider></Slider>
        <br/> Theme
      </Toggle>*/}

    </React.Fragment>
  )
};
