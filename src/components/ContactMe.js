import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

const ContactMe = () => (
  <div className='contact-me'>
    <a name="Contact-Me"></a> <h2 className='last_section'> Contact Me </h2>
    <center>
      <p style={displays.contactStyle}> Super excited you browsed through my website!
      <br /> Please contact me by whatever method might be best though e-mail works best. </p>
    </center>
  </div>
);

export default ContactMe;
