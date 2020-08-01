import React from 'react';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes, imgSrcs } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 160px auto;
  text-align: center;
`;
const H1Style = styled.h1`
  background-color: ${colors.transparentSeaBlue};
  width: 50%;
  border-radius: 12px;
  text-align: center;
  font-size: ${fontSizes.med2};
  padding: 20px 10px;
  margin: 30px auto;

  &::selection {
    background-color: ${colors.skyBlue};
    color: ${colors.darkGray};
  }
`;
const ImgStyle = styled.img`
  font-size: ${fontSizes.med1};
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: 0 30px;
    max-width: 360px;
    height: auto;
  }
`;
const WelcomeStyle = styled.div`
  text-align: center;
  font-size: ${fontSizes.sm1};
  line-height: 1.5;
  margin: 5px 20px;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }
`;
const ResumeBox = styled.div`
  width: 40%;
  border-radius: 12px;
  margin: 10px auto;
  background-color: ${colors.transparentSeaBlue};
  width: 60%;
  padding: 20px 20px 40px;

  @media (max-width: 600px) {
    width: 50%;
  }
`;
const ResumeButton = styled.a`
  width: 35%;
  border: 1px solid white;
  border-radius: 8px;
  padding: 7.5px;
  text-decoration: none;
  color: white;
  background-color: ${colors.moreSeaBlue};
  font-size: ${fontSizes.sm2};
  text-shadow: black .5px .5px;

  &:hover {
    color: ${colors.seaBlue};
  }
`;
const PStyle = styled.p`
  color: white;
  line-height: 1.5;
  font-size: ${fontSizes.sm1};
  text-shadow: black 1px 1px;
`;

// export main component
export default function Welcome() {
  return (
    <StyledWrapper>
      <H1Style>Hi, I'm Anika Rede.</H1Style>
      <ImgStyle src={imgSrcs.profile} alt="This is me!" />

      <WelcomeStyle>
        <PStyle>
          Allow me to introduce myself!
          <br /> I started out my CS career a couple years ago and almost immediately found my passion in the field: natural language processing.
          <br /> However, I want to acquaint myself with software engineering and AI/ML as a bridge before delving into NLP.
          <br /> Currently, I am looking for an internship that can give me some experience in SWE, NLP, or animation.
        </PStyle>
        <ResumeBox>
          <PStyle> If you'd like, you can take a quick peek at my resumé! </PStyle>
          <ResumeButton href="resume.pdf" target="_blank"> Resumé </ResumeButton>
        </ResumeBox>
      </WelcomeStyle>
    </StyledWrapper>
  )
};
