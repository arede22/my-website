// general imports
import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
// components
import { ImageLoader, Modal } from '@components';
// styles
import { theme, media, Anchor, Link, Box } from '@styles';
const { colors, fontSizes, hrefs, imgSrcs } = theme;
// Currently exploring pet projects

// styles and wrappers
const ImgStyle = styled(ImageLoader)`
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
const StyledLink = styled(Link)`
  text-align: center;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
// tree https://www.w3schools.com/html/html_images_imagemap.asp
// tooltip for tree https://www.w3schools.com/howto/howto_css_tooltip.asp

// Projects&Portfolio Interactive Tree -- class extensions, work, club --> see more pages somehow
// next is blogscape

// <LazyLoad debounce={false}
// offsetVertical={125}><ImgStyle src={imgSrcs.tree} alt="interactive tree" usemap='#imagemap' />
// <map name="imagemap">
//   <area shape="circle" coords="213.6,75,122" alt="Car" href={hrefs.carRepo} />
//   <area shape="circle" coords="300,189,119" alt="Maps" />
//   <area shape="circle" coords="182,193.7,102" alt="GameDev" href={hrefs.gameVid} />
//   <area shape="circle" coords="138.5,298.5,118.6" alt="Website" href={hrefs.webRepo} />
//   <area shape="circle" coords="413,158,92" alt="ML Decal" href={hrefs.mlDecalRepo} />
//   <area shape="circle" coords="397,257.8,93.8" alt="NLP" />
//   <area shape="circle" coords="330,80,98.6" alt="Etc" />
// </map>
// </LazyLoad>

// export main component
export default function Portfolio({ theme }) {
  const altText = (src) => {
    var alt = src.replace('/static/portfolio/', '').replace('.png', '');
    return alt;
  }

  return (
    <React.Fragment>
      <Anchor name="Portfolio" id="portfolio-anchor"></Anchor>
      <div>
        <H2Style> Portfolio </H2Style>
          <Box>
            <H3Style> Extensions of Class Projects </H3Style>
            <ULWrapper>
              <LIWrapper> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA
                <Modal trigger="car" img={imgSrcs.car} pop="popCar" content="img01" alt={altText(imgSrcs.car)} />
              </LIWrapper>

              <LIWrapper> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation
                <Modal trigger="map" img={imgSrcs.map} pop="popMap" content="img02" alt={altText(imgSrcs.map)} />
              </LIWrapper>

              <LIWrapper> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level:
                <SpaceBetween>
                  <Modal trigger="randRooms" img={imgSrcs.randRooms} pop="popRandRooms" content="img03" alt={altText(imgSrcs.randRooms)} />
                  <Modal trigger="boss" img={imgSrcs.boss} pop="popBoss" content="img04" alt={altText(imgSrcs.boss)} />
                </SpaceBetween>
                <PStyle>
                  <StyledLink href={hrefs.gameVid} target="_blank" rel="nofollow noopener noreferrer"> Click here for DEMO </StyledLink>
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
      </div>
    </React.Fragment>
  )
};
