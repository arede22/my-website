import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, imgSrcs } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 70px auto;
  text-align: center;
`;
const H1Style = styled.h1`
  background-color: ${colors.transparentSeaBlue};
  width: 50%;
  border-radius: 12px;
  text-align: center;
  font-size: ${fontSizes.lg};
  padding: 20px 10px;
  margin: 30px auto;
  text-shadow: 2px 2px black;

  &::selection {
    background-color: ${colors.skyBlue};
    color: ${colors.darkGray};
    text-shadow: none;
  }

  @media (max-width: 600px) {
    font-size: ${fontSizes.med1};
  }
`;
const ImgStyle = styled.img`
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: 0 30px;
    max-width: 100%;
    height: auto;
  }
`;
const WelcomeStyle = styled.div`
  text-align: center;
  font-size: ${fontSizes.sm1};
  line-height: 1.5;
  margin: 5px 20px;
  text-shadow: 2px 2px black;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }
`;
const ResumeBox = styled.div`
  background-color: ${colors.transparentSeaBlue};
  width: 40%;
  border-radius: 12px;
  padding: 2.5px 10px 30px;
  margin: 20px 20px 30px;
`;
const ResumeButton = styled.a`
  width: 35%;
  border: 1px solid white;
  border-radius: 8px;
  padding: 15px;
  text-decoration: none;
  color: white;
  background-color: ${colors.skyBlue};
  font-size: ${fontSizes.sm3};

  &:hover {
    color: ${colors.moreSeaBlue};
  }
`;

// export main component
export default function Welcome() {
  return (
    <StyledWrapper>
      <H1Style>Hi, I'm Anika Rede.</H1Style>
      <ImgStyle src={imgSrcs.profile} alt="This is me!" />

      <WelcomeStyle>
        <p>
          I am a sophomore in UC Berkeley studying Electrical Engineering and Computer Science (EECS) concentrating in AI & ML with Linguistics as my minor. My areas of interest lie in ML, NLP, and Cloud Computing.
        </p>
        <ResumeBox>
          <p> Take a quick peek at my resumé! </p>
          <ResumeButton href="resume.pdf" target="_blank"> Resumé </ResumeButton>
        </ResumeBox>
      </WelcomeStyle>
    </StyledWrapper>
  )
};
