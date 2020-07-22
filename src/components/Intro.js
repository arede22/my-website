import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
import WorkExperience from './workExperience';
import Clubs from './clubs';
import Courses from './courses';
import Softwares from './softwares';
const { colors, fontSizes } = theme;

var repos = [];

fetch('https://api.github.com/users/arede22/repos')
  .then(response => response.json())
  .then(json => {
    for (var i in json) {
      var { name } = json[i];
      repos.push(name);
    }
  })
  .catch(e => console.error(e));

const avoidLanguages = ["JSON", "Markdown"];

// styles and wrappers
const AnchorPoint = styled.a`
  margin: 0 auto;
`;
const StyledWrapper = styled.div`
  margin: 10px 0;

  @media (max-width: 600px) {
    display: inline-block;
  }
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
const Rows = styled.ul`
  display: flex;
  padding: 0 15px;
`;
const Cols = styled(StyledWrapper)`
  flex: 50%;
`;
const ULWrapper = styled.ul`
  color: white;
  padding: 0 40px;
`;
const LIWrapper = styled.li`
  color: white;
  line-height: 1.5;
`;
const PStyle = styled.p`
  text-align: left;
`;

// Courses, languages, college info -- progress bars
// languages, lines of code: https://codetabs.com/count-loc/count-loc-online.html

// export main component
export default function Intro() {
  // taken from bchiang/v4
  var totalLoc = 0;

  var [loc, setLoc] = useState({
    languages: [],
    linesOfCode: [],
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.codetabs.com/v1/loc?github=arede22/theanikarede')
      .then(response => response.json())
      .then(json => {
        for (var i in json) {
          var { language, linesOfCode } = json[i];

          if (language.toLowerCase() == "total") {
            totalLoc = linesOfCode;
          } else if (!avoidLanguages.includes(language)) {
            setLoc({
              languages: loc.languages.push(language),
              linesOfCode: loc.linesOfCode.push(linesOfCode),
            })
          }
        }
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <React.Fragment>
      <AnchorPoint name="Intro" id="intro-anchor"></AnchorPoint>
      <StyledWrapper>
        <H2Style>About Me</H2Style>
        <StyledWrapper>
          <Box>
            <H3Style> Major Coursework </H3Style>
            <ULWrapper>
              <LIWrapper> Intro to Computer Science (Python, Scheme, SQL) </LIWrapper>
              <LIWrapper> Data Structures & Algorithms (Java) </LIWrapper>
              <LIWrapper> Discrete Mathematics and Probability Theory </LIWrapper>
              <LIWrapper> Probability and Random Processes (Jupyter Notebook) </LIWrapper>
              <LIWrapper> Optimization Models in Engineering </LIWrapper>
              <LIWrapper> (Audited) Natural Language Processing </LIWrapper>
              <LIWrapper> Computer Architecture (C) </LIWrapper>
              <LIWrapper> Designing Information Devices and Systems (labs) </LIWrapper>
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
              <h4> Langs </h4>
                <LIWrapper> Kotlin </LIWrapper>
                <LIWrapper> JavaScript </LIWrapper>
                <LIWrapper> Python </LIWrapper>
                <LIWrapper> Swift </LIWrapper>
                <LIWrapper> C/C++ </LIWrapper>
                <LIWrapper> Java </LIWrapper>
                <LIWrapper> HTML/CSS </LIWrapper>
              </Cols>
              <Cols>
              <h4> Libraries, Softwares, Frameworks </h4>
                <LIWrapper> PyTorch </LIWrapper>
                <LIWrapper> COMSOL </LIWrapper>
                <LIWrapper> AutoCAD </LIWrapper>
                <LIWrapper> Tensorflow </LIWrapper>
                <LIWrapper> React </LIWrapper>
                <LIWrapper> MATLAB </LIWrapper>
                <LIWrapper> SolidWorks </LIWrapper>
                <LIWrapper> Photoshop, Illustrator </LIWrapper>
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
            <H3Style> Clubs </H3Style>
            <ULWrapper>
              <LIWrapper> Engineers Without Borders
                <PStyle>
                  Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community,
                  Starting new project next semester: hoping for a local project toward helping provide for the homeless in Berkeley/SF areas
                </PStyle>
              </LIWrapper>
              <LIWrapper> Computer Science Kickstart
                <PStyle>
                  Intro to computer science week for female pre-freshmen,
                  Participated in the program myself when I entered Berkeley and gave back as a committee member on Industrial Relations
                </PStyle>
              </LIWrapper>
              <LIWrapper> Association of Women in EECS
                <PStyle>
                  Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world
                </PStyle>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <WorkExperience />
          </Box>
        </StyledWrapper>
      </StyledWrapper>
    </React.Fragment>
  )
};
