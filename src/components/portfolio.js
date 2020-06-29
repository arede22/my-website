import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

//Coursework
//Skills
//Softwares and comfortability
//Currently exploring pet projects

const Portfolio = ({ data }) => (

  <ul>
    <li> <a href='/'> Home </a> </li>
    <li> <a href="#About">About</a> </li>
    <li> <a href="#Portfolio">Portfolio</a> </li>
    <li> <a href="#Contact-Me">Contact Me</a> </li>
    <li> <a href="resume.pdf" target="_blank"> Resume </a> </li>
  </ul>
);

export default Portfolio;
