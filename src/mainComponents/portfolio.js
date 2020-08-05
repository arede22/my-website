import React from 'react';
import styled from 'styled-components';
// components
import { Modal } from '@components';
// styles
import { theme, media } from '@styles';
const { colors, fontSizes, hrefs, imgSrcs } = theme;
// Currently exploring pet projects

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
  color: white;
  padding: 0 40px;
`;
const LIWrapper = styled.li`
  margin: 5px 0px;
`;
const PStyle = styled.p`
  text-align: center;
  margin: 0 auto;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  text-align: center;

  &:hover {
    color: ${colors.skyBlue};
  }
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

// tree https://www.w3schools.com/html/html_images_imagemap.asp
// tooltip for tree https://www.w3schools.com/howto/howto_css_tooltip.asp

// Projects&Portfolio Interactive Tree -- class extensions, work, club --> see more pages somehow
// next is blogscape

// export main component
export default function Portfolio({ theme }) {
  return (
    <React.Fragment>
      <AnchorPoint name="Portfolio" id="portfolio-anchor"></AnchorPoint>
      <StyledWrapper>
        <H2Style> Portfolio </H2Style>
          {/*<ImgStyle loading="lazy" src={imgSrcs.tree} alt="interactive tree" width="50%" height="50%" usemap='#projmap' />
          <map className="projmap" id="projmap">
            <area shape="circle" coords="98,31,30" alt="Car" href="https://www.google.com/" onClick={console.log('hi')}/>
            <area shape="circle" coords="290,172,333" alt="Maps" href="https://www.youtube.com/" />
            <area shape="circle" coords="337,300,44" alt="Game" href="https://www.duckduckgo.com/" />
          </map>*/}
          <Box>
            <H3Style> Extensions of Class Projects </H3Style>
            <ULWrapper>
              <LIWrapper> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA
                <Modal trigger="car" img={imgSrcs.car} pop="popCar" content="img01" alt={imgSrcs.car.replace('static/portfolio/', '').replace('.png', '')} />
              </LIWrapper>

              <LIWrapper> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation
                <Modal trigger="map" img={imgSrcs.map} pop="popMap" content="img02" alt={imgSrcs.map.replace('static/portfolio/', '').replace('.png', '')} />
              </LIWrapper>

              <LIWrapper> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level:
                <SpaceBetween>
                  <Modal trigger="randRooms" img={imgSrcs.randRooms} pop="popRandRooms" content="img03" alt={imgSrcs.randRooms.replace('static/portfolio/', '').replace('.png', '')} />
                  <Modal trigger="boss" img={imgSrcs.boss} pop="popBoss" content="img04" alt={imgSrcs.boss.replace('static/portfolio/', '').replace('.png', '')} />
                </SpaceBetween>
                <PStyle>
                  <Link href={hrefs.gameVid} target="_blank" rel="nofollow noopener noreferrer"> Click here for DEMO </Link>
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
                  <LIWrapper> Learning graphic design via Photoshop, Illustrator, and Maya </LIWrapper>
                  <LIWrapper> Original pixel art Gameboy game built from scratch </LIWrapper>
                  <LIWrapper> Image analysis to interpret and translate language with NLP using AI/ML </LIWrapper>
                </ULWrapper>
              </LIWrapper>
              <LIWrapper> Projected projects:
                <ULWrapper>
                  <LIWrapper> Safety app around Berkeley for students built using Swift </LIWrapper>
                  <LIWrapper> Modifying voice-activated car built last semester to be hooked up to bluetooth and Wi-Fi </LIWrapper>
                </ULWrapper>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Exploring pet projects </H3Style>
            <ULWrapper>
              <LIWrapper> Learning graphic design and animation software </LIWrapper>
              <LIWrapper> Exploring beginner projects using NLP analysis with AI/ML </LIWrapper>
              <LIWrapper> Safety app around Berkeley for Cal students </LIWrapper>
              <LIWrapper> Improving on voice-activated car built last semester </LIWrapper>
              <LIWrapper> Contributing to friends' personal projects </LIWrapper>
            </ULWrapper>
          </Box>
      </StyledWrapper>
    </React.Fragment>
  )
};
