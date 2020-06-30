import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts } = theme;

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
const ThreeGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-gap: 20px;
  overflow-x: auto;
  margin: 0px 60px 20px;
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
`;
const Rows = styled.(ULWrapper)`
  display: flex;
`;
const Cols = styled.(StyledWrapper)`
  flex: 50%;
`;

// export main component
export default function Intro() {
  return (
    <StyledWrapper>
      <a name="About"></a> <H2Style>About</H2Style>
      <StyledWrapper>
        <ThreeGrid>
          <Box>
            <H3Style> Major Coursework </H3Style>
              <ULWrapper>
                <LIWrapper> Intro to Computer Science </LIWrapper>
                <LIWrapper> Data Structures & Algorithms </LIWrapper>
                <LIWrapper> Discrete Mathematics and Probability Theory </LIWrapper>
                <LIWrapper> Probability and Random Processes </LIWrapper>
                <LIWrapper> Optimization Models in Engineering </LIWrapper>
                <LIWrapper> (Audited) Natural Language Processing </LIWrapper>
                <LIWrapper> Computer Architecture </LIWrapper>
                <LIWrapper> Designing Information Devices and Systems </LIWrapper>
              </ULWrapper>
            <H3Style> Minor Coursework </H3Style>
              <ULWrapper>
                <LIWrapper> Intro to Linguistics </LIWrapper>
                <LIWrapper> Intro to Syntax and Semantics </LIWrapper>
              </ULWrapper>
          </Box>
          <Box>
            <H3Style> Languages/Software Skills </H3Style>
              <Rows>
                <Cols>
                  <LIWrapper> Kotlin </LIWrapper>
                  <LIWrapper> JavaScript </LIWrapper>
                  <LIWrapper> Python </LIWrapper>
                  <LIWrapper> PyTorch </LIWrapper>
                  <LIWrapper> C/C++ </LIWrapper>
                  <LIWrapper> AutoCAD </LIWrapper>
                  <LIWrapper> COMSOL </LIWrapper>
                  <LIWrapper> Photoshop </LIWrapper>
                </Cols>
                <Cols>
                  <LIWrapper> Swift </LIWrapper>
                  <LIWrapper> HTML/CSS </LIWrapper>
                  <LIWrapper> Java </LIWrapper>
                  <LIWrapper> Tensorflow </LIWrapper>
                  <LIWrapper> React </LIWrapper>
                  <LIWrapper> MATLAB </LIWrapper>
                  <LIWrapper> SolidWorks </LIWrapper>
                </Cols>
              </Rows>
            <H3Style> Skills </H3Style>
              <ULWrapper>
                <LIWrapper> Data visualization and simulation softwares used practically for research </LIWrapper>
                <LIWrapper> Building software tools for use around offices and within academia </LIWrapper>
                <LIWrapper> Planning and designing engineering systems for real-world use in Engineers Without Borders </LIWrapper>
                <LIWrapper> EE and CS hands-on experience and extending course projects beyond the classroom </LIWrapper>
                <LIWrapper> Mathematical skills to understand in-depth background on Machine Learning processes </LIWrapper>
                <LIWrapper> People skills, smooth communication, & true personality </LIWrapper>
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
        </ThreeGrid>
        <TwoGrid>
          <Box>
            <H3Style> Clubs </H3Style>
              <ULWrapper>
                <LIWrapper> Engineers Without Borders
                  <ULWrapper>
                    <LIWrapper> Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community </LIWrapper>
                    <LIWrapper> Starting new project next semester: hoping for a local project toward helping provide for the homeless in Berkeley/SF areas </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
                <LIWrapper> Computer Science Kickstart
                  <ULWrapper>
                    <LIWrapper> Intro to computer science week for female pre-freshmen </LIWrapper>
                    <LIWrapper> Participated in the program myself when I entered Berkeley and gave back as a committee member on Industrial Relations </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
                <LIWrapper> Association of Women in EECS
                  <ULWrapper>
                    <LIWrapper> Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
              </ULWrapper>
          </Box>
          <Box>
            <H3Style> Past work experience </H3Style>
              <ULWrapper>
                <LIWrapper> (Computational Linguistics) Research Intern @ICSI (International Computer Science Institute) -- UC-Berkeley, Jan 2020 -- Current
                  <ULWrapper>
                    <LIWrapper> Predicting the semantic components from morphologically complex words in polysynthetic languages of Karuk and Yurok </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
                <LIWrapper> Software Engineering Intern @Pulse Q&A -- SF, Summer 2019
                  <ULWrapper>
                    <LIWrapper> Limited personnel previously led to outsourcing manual labor </LIWrapper>
                    <LIWrapper> Automated internal tools improved efficiency of office (allowed focus on increasing traffic on the service's platform, marketing efforts, and bettering market-fit) </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
                <LIWrapper> (EECS) Research Intern @Jadoo Tech -- UC-Berkeley, Feb-Sept 2019
                  <ULWrapper>
                    <LIWrapper> Conducted research in physics theoretical equations and experiments for start-up in UC-Berkeley </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
                <LIWrapper> (EECS) Research Intern @Feng Labs -- CWRU, 2015-2018
                  <ULWrapper>
                    <LIWrapper> Quantified properties of metastatic breast cancer cells using MEMS microsensors </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
                <LIWrapper> IT Hub Intern @Hathaway Brown -- OH, 2015-2018
                  <ULWrapper>
                    <LIWrapper> Both worked and volunteered at high-school's IT Helpdesk </LIWrapper>
                  </ULWrapper>
                </LIWrapper>
              </ULWrapper>
          </Box>
        </TwoGrid>
      </StyledWrapper>
    </StyledWrapper>

  )
};
