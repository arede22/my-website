import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts, fontSizes, imgSrcs } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  /* display: flex;
  justify-content: center; */
`;
const H1Style = styled.h1`
  background-color: ${colors.transparentSeaBlue};
  width: 50%;
  border-radius: 8px;
  text-align: center;
  font-size: ${fontSizes.lg};
  padding: 30px 5px;
  margin: 110px 15px 30px;
  text-shadow: 2px 2px black;
  color: white;
  font-family: ${fonts.Lucida};
`;
const ImgStyle = styled.img`
  margin-left: 41%;
`;
const WelcomeStyle = styled.div`
  text-align: center;
  font-size: ${fontSizes.sm1};
  line-height: 1.5;
  margin: 5px 20px;
  text-shadow: 2px 2px black;
`;
const ResumeBox = styled.div`
  background-color: ${colors.transparentSeaBlue};
  width: 25%;
  border-radius: 15px;
  font-size: ${fontSizes.sm3};
  padding: 2.5px 10px 30px;
  margin: 20px 20px 30px;
`;
const ResumeButton = styled.a`
  width: auto;
  border: 1px solid white;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  color: white;
  font-family: ${fonts.Lucida};
  text-decoration: none;

  &:hover {
    color: ${colors.skyBlue};

  }
`;
const PStyle = styled.p`
  color: white;
  font-family: ${fonts.Lucida};
`;

// export main component
export default function Welcome() {
  return (
    <StyledWrapper>
      <H1Style>Hi, I'm Anika Rede.</H1Style>
      <ImgStyle src={imgSrcs.profile} alt="This is me!" />

      <WelcomeStyle>
        <PStyle>
          I am a sophomore in UC Berkeley studying Electrical Engineering and Computer Science (EECS) concentrating in AI & ML with Linguistics as my minor. My areas of interest lie in ML, NLP, and Cloud Computing.
        </PStyle>
        <ResumeBox>
          <PStyle> Take a quick peek at my resumé! </PStyle>
          <ResumeButton href="resume.pdf" target="_blank"> Resumé </ResumeButton>
        </ResumeBox>
      </WelcomeStyle>
    </StyledWrapper>
  )
};
