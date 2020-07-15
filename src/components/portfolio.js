import React from 'react';
import styled from 'styled-components';
import Modal from './modal';
import { theme, media } from '../styles';
const { colors, fontSizes, hrefs, imgSrcs } = theme;
// Coursework
// Skills
// Softwares and comfortability
// Currently exploring pet projects

// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const AnchorPoint = styled.a`
  margin: 0 auto;
`;
const StyledWrapper = styled.div`
  margin: 0;
`;
const ImgStyle = styled.img`
  margin: auto;
`;
const H2Style = styled.h2`
  text-align: center;
  justify-content: center;
  margin: 75px 0px;
`;
const H3Style = styled.h3`
  font-size: ${fontSizes.sm3};
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  overflow-x: auto;
  padding: 7.5px 20px 20px;
  width: 70%;
  margin: auto;
  margin-bottom: 30px;
`;
const ULWrapper = styled.ul`
  color: ${colors.transparentSeaBlue};
`;
const LIWrapper = styled.li`
  margin: 5px 0px;
`;
const PStyle = styled.p`
  text-align: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: ${colors.skyBlue};
  }
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

// export main component
export default function Portfolio() {
  return (
    <React.Fragment>
      <AnchorPoint name="Portfolio" id="portfolio-anchor"></AnchorPoint>
      <StyledWrapper>
        <H2Style> Portfolio </H2Style>
          <ImgStyle src={imgSrcs.tree} alt="interactive tree" width="50%" height="50%" />
          <Box>
            <H3Style> Extensions of Class Projects </H3Style>
            <ULWrapper>
              <LIWrapper> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA
                <Modal trigger="car" img={imgSrcs.car} pop="popCar" content="img01" aria={imgSrcs.car.replace('../static/portfolio/', '').replace('.png', '')} />
              </LIWrapper>

              <LIWrapper> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation
                <Modal trigger="map" img={imgSrcs.map} pop="popMap" content="img02" aria={imgSrcs.map.replace('../static/portfolio/', '').replace('.png', '')} />
              </LIWrapper>

              <LIWrapper> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level:
                <SpaceBetween>
                  <Modal trigger="randRooms" img={imgSrcs.randRooms} pop="popRandRooms" content="img03" aria={imgSrcs.randRooms.replace('../static/portfolio/', '').replace('.png', '')} />
                  <Modal trigger="boss" img={imgSrcs.boss} pop="popBoss" content="img04" aria={imgSrcs.boss.replace('../static/portfolio/', '').replace('.png', '')} />
                </SpaceBetween>
                <PStyle>
                  <Link href={hrefs.gameVid} target="_blank"> Click here for DEMO </Link>
                </PStyle>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Personal Projects </H3Style>
            <ULWrapper>
              <LIWrapper> Current projects:
                <ULWrapper>
                  <LIWrapper> Personal website built with React and Next.js, allows playing with graphic design </LIWrapper>
                  <LIWrapper> Safety app around Berkeley for students built using Swift </LIWrapper>
                  <LIWrapper> Learning graphic design via Photoshop, Illustrator, and Maya </LIWrapper>
                </ULWrapper>
              </LIWrapper>
              <LIWrapper> Projected projects:
                <ULWrapper>
                  <LIWrapper> Modifying voice-activated car built last semester to be hooked up to bluetooth and Wi-Fi </LIWrapper>
                  <LIWrapper> Original pixel art Gameboy game built from scratch </LIWrapper>
                  <LIWrapper> Image analysis to interpret and translate language with NLP using AI/ML </LIWrapper>
                </ULWrapper>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Exploring pet projects (more below) </H3Style>
            <ULWrapper>
              <LIWrapper> Safety app around Berkeley for Cal students </LIWrapper>
              <LIWrapper> Improving on voice-activated car built last semester </LIWrapper>
              <LIWrapper> Learning graphic design and animation software </LIWrapper>
              <LIWrapper> Contributing to friends' personal projects </LIWrapper>
              <LIWrapper> Exploring beginner projects using NLP analysis with AI/ML </LIWrapper>
            </ULWrapper>
          </Box>
      </StyledWrapper>
    </React.Fragment>
  )
};
