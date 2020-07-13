import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
import WorkExperience from './workExperience';
const { colors, fontSizes } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;

  @media (max-width: 600px) {
    display: inline-block;
  }
`;
const H2Style = styled.h2`
  text-align: center;
  justify-content: center;
  font-size: ${fontSizes.med1};
  margin: 75px 0px;
  text-shadow: 2px 2px black;
`;
const ThreeGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-gap: 20px;
  /* overflow-x: auto; */
  margin: 0px 60px 20px;
`;
const TwoGrid = styled.div`
  display: grid;
  grid-template-columns: 610px 610px;
  grid-gap: 20px;
  /* overflow-x: auto; */
  margin: 0px 60px;
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  /* border-radius: 5px; */
  /* overflow-x: auto; */
  padding: 7.5px 20px 20px;
`;
const Rows = styled.ul`
  display: flex;
`;
const Cols = styled(StyledWrapper)`
  flex: 50%;
`;
const AnchorPoint = styled.a`
  margin: 0 auto;
`;
const ULWrapper = styled.ul`
  color: ${colors.transparentSeaBlue};
`;
const LIWrapper = styled.li`
  color: ${colors.lightGray};
  line-height: 1.5;
`;
const H3Style = styled.h3`
  font-size: ${fontSizes.lg};
`;

// export main component
export default function Intro() {
  return (
    <StyledWrapper>
      <AnchorPoint name="About" id="about-anchor"></AnchorPoint>
      <H2Style>About Me</H2Style>
      <StyledWrapper>
        <ThreeGrid>
          <Box>
            <h3> Major Coursework </h3>
            <ul>
              <li> Intro to Computer Science </li>
              <li> Data Structures & Algorithms </li>
              <li> Discrete Mathematics and Probability Theory </li>
              <li> Probability and Random Processes </li>
              <li> Optimization Models in Engineering </li>
              <li> (Audited) Natural Language Processing </li>
              <li> Computer Architecture </li>
              <li> Designing Information Devices and Systems </li>
            </ul>
            <h3> Minor Coursework </h3>
            <ul>
              <li> Intro to Linguistics </li>
              <li> Intro to Syntax and Semantics </li>
            </ul>
          </Box>
          <Box>
            <h3> Languages/Software Skills </h3>
            <Rows>
              <Cols>
                <li> Kotlin </li>
                <li> JavaScript </li>
                <li> Python </li>
                <li> PyTorch </li>
                <li> C/C++ </li>
                <li> AutoCAD </li>
                <li> COMSOL </li>
                <li> Photoshop </li>
              </Cols>
              <Cols>
                <li> Swift </li>
                <li> HTML/CSS </li>
                <li> Java </li>
                <li> Tensorflow </li>
                <li> React </li>
                <li> MATLAB </li>
                <li> SolidWorks </li>
              </Cols>
            </Rows>
            <h3> Skills </h3>
            <ul>
              <li> Data visualization and simulation softwares used practically for research </li>
              <li> Building software tools for use around offices and within academia </li>
              <li> Planning and designing engineering systems for real-world use in Engineers Without Borders </li>
              <li> EE and CS hands-on experience and extending course projects beyond the classroom </li>
              <li> Mathematical skills to understand in-depth background on Machine Learning processes </li>
              <li> People skills, smooth communication, & true personality </li>
            </ul>
          </Box>
        </ThreeGrid>
        <TwoGrid>
          <Box>
            <h3> Clubs </h3>
            <ul>
              <li> Engineers Without Borders
                <ul>
                  <li> Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community </li>
                  <li> Starting new project next semester: hoping for a local project toward helping provide for the homeless in Berkeley/SF areas </li>
                </ul>
              </li>
              <li> Computer Science Kickstart
                <ul>
                  <li> Intro to computer science week for female pre-freshmen </li>
                  <li> Participated in the program myself when I entered Berkeley and gave back as a committee member on Industrial Relations </li>
                </ul>
              </li>
              <li> Association of Women in EECS
                <ul>
                  <li> Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world </li>
                </ul>
              </li>
            </ul>
          </Box>
          <Box>
          <WorkExperience />
          </Box>
        </TwoGrid>
      </StyledWrapper>
    </StyledWrapper>
  )
};
