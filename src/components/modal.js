import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../styles';
const { colors, fontSizes, fonts } = theme;

const Modal = ({trigger, img, content, close}) => (

  <nav>
    <ul>
      <li> <a href='/'> <a>Home</a> </a> </li>
      <li> <a href="#About">About</a> </li>
      <li> <a href="#Portfolio">Portfolio</a> </li>
      <li> <a href="#Contact-Me">Contact Me</a> </li>
      <li> <a href="resume.pdf" target="_blank"> Resume </a> </li>
    </ul>
  </nav>
);
Modal.propTypes = {
  trigger: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
  close: PropTypes.number
};

export default Modal
