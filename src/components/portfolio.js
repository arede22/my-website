import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: block;
  &:after {
    content: '';
  }
`

const Portfolio = ({ data }) => (

  <ul>
    <li> <a href='/'> <a>Home</a> </a> </li>
    <li> <a href="#About">About</a> </li>
    <li> <a href="#Portfolio">Portfolio</a> </li>
    <li> <a href="#Contact-Me">Contact Me</a> </li>
    <li> <a href="resume.pdf" target="_blank"> Resume </a> </li>
  </ul>
)
Portfolio.propTypes = {
  data: PropTypes.number,
};

export default Portfolio
