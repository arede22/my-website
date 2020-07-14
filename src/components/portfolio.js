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
const StyledWrapper = styled.div`
  margin: 0;
`;
const H2Style = styled.h2`
  text-align: center;
  justify-content: center;
  font-size: ${fontSizes.med1};
  margin: 75px 0px;
  text-shadow: 2px 2px black;
`;
const TwoGrid = styled.div`
  display: grid;
  grid-template-columns: 610px 610px;
  grid-gap: 20px;
  /* overflow-x: auto; */
  margin: 0px 60px;

  @media ${media.laptop} {
    max-width: 800px;
  }

  @media ${media.laptopL} {
    max-width: 1000px;
  }

  @media ${media.desktop} {
    max-width: 1200px;
  }
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  /* border-radius: 5px; */
  overflow-x: auto;
  padding: 7.5px 20px 20px;
  width: 70%;
  margin: auto;
  margin-bottom: 30px;

`;
const LIWrapper = styled.li`
  margin: 5px 0px;
`;
const PStyle = styled.p`
  text-align: center;
`;
const Link = styled.a`
  text-decoration: none;

  &:hover {
    color: ${colors.skyBlue};
  }

`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AnchorPoint = styled.a`
  margin: 0 auto;
`;

// export main component
export default function Portfolio() {
  return (
    <React.Fragment>
    <AnchorPoint name="Portfolio" id="portfolio-anchor"></AnchorPoint>
    <StyledWrapper>
      <H2Style> Portfolio </H2Style>
        <img src={imgSrcs.tree} alt="interactive tree">
        <Box>
          <h3> Class projects and extensions </h3>
          <ul>
            <LIWrapper> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA </LIWrapper>

              <Modal trigger="car" img={imgSrcs.car} pop="popCar" content="img01" aria={imgSrcs.car.replace('../static/portfolio/', '').replace('.png', '')} />
            <LIWrapper> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation </LIWrapper>
              <Modal trigger="map" img={imgSrcs.map} pop="popMap" content="img02" aria={imgSrcs.map.replace('../static/portfolio/', '').replace('.png', '')} />

            <LIWrapper> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level: </LIWrapper>
              <SpaceBetween>
                <Modal trigger="randRooms" img={imgSrcs.randRooms} pop="popRandRooms" content="img03" aria={imgSrcs.randRooms.replace('../static/portfolio/', '').replace('.png', '')} />

                <Modal trigger="boss" img={imgSrcs.boss} pop="popBoss" content="img04" aria={imgSrcs.boss.replace('../static/portfolio/', '').replace('.png', '')} />
              </SpaceBetween>
              <PStyle>
                <Link href={hrefs.gameVid} target="_blank"> Click here for DEMO </Link>
              </PStyle>
          </ul>
        </Box>
        <Box>
          <h3> Personal Projects </h3>
          <ul>
            <LIWrapper> Current projects:
              <ul>
                <LIWrapper> Personal website built with React and Next.js, allows playing with graphic design </LIWrapper>
                <LIWrapper> Safety app around Berkeley for students built using Swift </LIWrapper>
                <LIWrapper> Learning graphic design via Photoshop, Illustrator, and Maya </LIWrapper>
              </ul>
            </LIWrapper>
            <LIWrapper> Projected projects:
              <ul>
                <LIWrapper> Modifying voice-activated car built last semester to be hooked up to bluetooth and Wi-Fi </LIWrapper>
                <LIWrapper> Original pixel art Gameboy game built from scratch </LIWrapper>
                <LIWrapper> Image analysis to interpret and translate language with NLP using AI/ML </LIWrapper>
              </ul>
            </LIWrapper>
          </ul>
        </Box>
        <Box>
          <h3> Exploring pet projects (more below) </h3>
          <ul>
            <li> Safety app around Berkeley for Cal students </li>
            <li> Improving on voice-activated car built last semester </li>
            <li> Learning graphic design and animation software </li>
            <li> Contributing to friends' personal projects </li>
            <li> Exploring beginner projects using NLP analysis with AI/ML </li>
          </ul>
        </Box>
    </StyledWrapper>
    </React.Fragment>
  )
};
