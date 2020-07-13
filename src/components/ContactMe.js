import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 30px 15px 240px;
  display: block;
  text-shadow: 2px 2px black;
  text-align: center;
`;
const H2Style = styled.h2`
  font-size: ${fontSizes.med1};
  padding: 150px 0px 35px;
`;
const ContactBox = styled.div`
  text-align: center;
  margin: 10px auto;
  background-color: ${colors.transparentSeaBlue};
  width: 60%;
  fontSize: ${fontSizes.sm3};
  border-radius: 15px;
  padding: 25px 10px;
  line-height: 1.5;
  text-shadow: 2px 2px black;

  @media (max-width: 600px) {
    width: 400px;
  }
`;
const AnchorPoint = styled.a`
  margin: 0 auto;
`;

// export main component
export default function ContactMe() {
  return (
    <StyledWrapper>
      <AnchorPoint name="Contact-Me" id="contactme-anchor"></AnchorPoint>
      <H2Style> Contact Me </H2Style>
      <ContactBox>
        <p>
          Thank you for browsing through my website! <br /> Please contact me by whatever method might be best though e-mail works best.
        </p>
      </ContactBox>
    </StyledWrapper>
  )
};
