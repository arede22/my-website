import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;

// export main component
export default function ContactMe() {
  return (
    <div className='contact-me'>
      <a name="Contact-Me"></a> <h2 className='last_section'> Contact Me </h2>
      <center>
        <p style={displays.contactStyle}> Super excited you browsed through my website!
        <br /> Please contact me by whatever method might be best though e-mail works best. </p>
      </center>

      <style jsx>{`
        .last_section {
          font-size: 36px;
          padding: 150px 0px 35px;
          text-shadow: 2px 2px black;
        }
        .contact-me {
          text-align: center;
          font-size: 18px;
          line-height: 1.5;
          margin: 30px 15px 240px;
        }
        .button {
          width: auto;
          border: 1px solid white;
          border-radius: 6px;
          padding: 10px;
          margin-bottom: 10px;
        }
        ul {
          color: white;
          font-family: ${fonts.Lucida};
        }
        li {
          color: white;
          font-family: ${fonts.Lucida};
          margin: 5px 0px;
        }
        h1 {
          color: white;
          font-family: ${fonts.Lucida};
        }
        h2 {
          color: white;
          font-family: ${fonts.Lucida};
        }
        h3 {
          color: white;
          font-family: ${fonts.Lucida};
        }
        p {
          color: white;
          font-family: ${fonts.Lucida};
        }
        a {
          color: white;
          font-family: ${fonts.Lucida};
          text-decoration: none;
        }
        a:hover {
          color: ${colors.skyBlue};
        }
        body {
          padding-top: 60px;
        }

      `} </style>

      </div>
  )
};
