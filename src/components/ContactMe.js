import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  text-align: center;
  font-size: ${fontSizes.sm3};
  line-height: 1.5;
  margin: 30px 15px 240px;
`;
const H2Style = styled.h2`
  font-size: ${fontSizes.med1};
  padding: 150px 0px 35px;
  text-shadow: 2px 2px black;
`;
const ContactBox = styled.div`
  text-align: center;
  background-color: ${colors.transparentSeaBlue};
  width: 60%;
  fontSize: ${fontSizes.sm3};
  border-radius: 15px;
  padding: 25px 10px;

  @media (max-width: 600px) {
    width: 400px;
  }
`;
const AnchorPoint = styled.a`
  margin-bottom: 10px;
`;

// export main component
export default function ContactMe() {
  return (
    <StyledWrapper>
      <AnchorPoint name="Contact-Me" id="contactme-anchor"></AnchorPoint>
      <H2Style> Contact Me </H2Style>
      <ContactBox>
        <p>
          Super excited you browsed through my website! Please contact me by whatever method might be best though e-mail works best.
        </p>
      </ContactBox>
    </StyledWrapper>
  )
};
