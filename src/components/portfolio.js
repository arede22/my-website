import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts } = theme;
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
  font-size: 36px;
  margin: 75px 0px;
  text-shadow: 2px 2px black;
  color: white;
  font-family: ${fonts.Lucida};
`;
const H3Style = styled.h3`
  color: white;
  font-family: ${fonts.Lucida};
`;
const TwoGrid = styled.div`
  display: grid;
  grid-template-columns: 610px 610px;
  grid-gap: 20px;
  overflow-x: auto;
  margin: 0px 60px;
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  border-radius: 5px;
  overflow-x: auto;
  padding: 7.5px 20px 20px;
`;
const ULWrapper = styled.ul`
  color: white;
  font-family: ${fonts.Lucida};
`;
const LIWrapper = styled.li`
  color: white;
  font-family: ${fonts.Lucida};
  margin: 5px 0px;
`;
const PStyle = styled.p`
  color: white;
  font-family: ${fonts.Lucida};
  text-align: center;
`;
const Link = styled.a`
  color: white;
  font-family: ${fonts.Lucida};
  text-decoration: none;

  &:hover {
    color: ${colors.skyBlue};
  }

`;

// export main component
export default function Portfolio() {
  return (

    <StyledWrapper>
      <a name="Portfolio"></a> <H2Style> Portfolio </H2Style>
      <TwoGrid>
        <Box>
          <H3Style> Class projects and extensions </H3Style>
            <ULWrapper>
              <LIWrapper> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA </LIWrapper>
                <img id="car" src="../static/portfolio/car.png" alt="car" height="40%" width="40%" vspace="10" style={{display: 'block', margin: '0 auto'}} />

                <div id="popCar" className="modal">
                  <span className="close" onClick="document.getElementById('popCar').style.display='none'">&times;</span>
                  <img className="modal-content" id="img01" style={{maxWidth: '700px;'}} />
                </div>

              <LIWrapper> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation </LIWrapper>
                <img id="map" src="../static/portfolio/map.png" alt="map" height="50%" width="50%" vspace="10" style={{display: 'block', margin: '0 auto'}} />

                <div id="popMap" className="modal">
                  <span className="close" onClick="document.getElementById('popMap').style.display='none'">&times;</span>
                  <img className="modal-content" id="img02" style={{maxHeight: '500px;'}}/>
                </div>

              <LIWrapper> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level: </LIWrapper>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <img id='randrooms' src="../static/portfolio/random-room.png" alt="random rooms" height="45%" width="45%" vspace="10" />

                  <div id="popRandrooms" className="modal">
                    <span className="close" onClick="document.getElementById('popRandrooms').style.display='none'">&times;</span>
                    <img className="modal-content" id="img03" style={{maxWidth: '700px;'}}/>
                  </div>

                  <img id='boss' src="../static/portfolio/boss.png" alt="boss level" height="45%" width="45%" vspace="10" />

                  <div id="popBoss" className="modal">
                    <span className="close" onClick="document.getElementById('popBoss').style.display='none'">&times;</span>
                    <img className="modal-content" id="img04" style={{maxWidth: '700px;'}}/>
                  </div>

                </div>
                <PStyle>
                  <Link href='https://www.youtube.com/watch?v=cdlxhQVUIro' target="_blank"> Click here for demo </Link>
                </PStyle>
            </ULWrapper>
        </Box>
        <Box>
          <H3Style> Personal projects </H3Style>
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
      </TwoGrid>

      <style jsx>{`
        #car {
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }
        #car:hover {opacity: 0.7;}
        #map {
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }
        #map:hover {opacity: 0.7;}
        #randrooms {
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }
        #randrooms:hover {opacity: 0.7;}
        #boss {
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }
        #boss:hover {opacity: 0.7;}

        .modal {
          display: none;
          position: fixed;
          z-index: 1;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.9);
        }
        .modal-content {
          margin: auto;
          display: block;
          width: 80%;
          -webkit-animation-name: zoom;
          -webkit-animation-duration: 0.6s;
          animation-name: zoom;
          animation-duration: 0.6s;
        }
        @-webkit-keyframes zoom {
          from {-webkit-transform:scale(0)}
          to {-webkit-transform:scale(1)}
        }
        @keyframes zoom {
          from {transform:scale(0)}
          to {transform:scale(1)}
        }
        .close {
          position: absolute;
          top: 15px;
          right: 35px;
          color: #f1f1f1;
          font-size: 40px;
          font-weight: bold;
          transition: 0.3s;
        }
        .close:hover,
        .close:focus {
          color: #bbb;
          text-decoration: none;
          cursor: pointer;
        }
        @media only screen and (max-width: 700px){
          .modal-content {
            width: 100%;
          }
        }
      `} </style>

    </StyledWrapper>

  )
};
