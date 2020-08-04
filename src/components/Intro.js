import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// components
// import Courses from './courses'; // coursework
// import Softwares from './softwares'; // softwares and comfortability
// import Skills from './skills';
// import Clubs from './clubs';
import WorkExperience from './workExperience';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;
// Courses, languages, college info -- progress bars

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
  font-size: ${fontSizes.sm1};
`;
const PStyle = styled.p`
  text-align: left;
`;

// export main component
export default function Intro() {
  // taken from bchiang/v4
  var totalLoc = 0;

  var [loc, setLoc] = useState({
    languages: [],
    linesOfCode: [],
  });

  useEffect(() => {
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }
    // for (var proj in repos) {
    // (for private repos) https://stackoverflow.com/questions/26881441/can-you-get-the-number-of-lines-of-code-from-a-github-repository
    var repos = [];
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/users/arede22/repos')
    .then(response => response.json())
    .then(json => {
      for (var i in json) {
        var { name } = json[i];
        repos.push(name);
      }
    })
    .catch(e => console.error(e));

    const avoidLanguages = ["JSON", "Markdown", "Plain Text"];

    fetch('https://api.codetabs.com/v1/loc?github=arede22/theanikarede')// + repos[proj] )
      .then(response => response.json())
      .then(json => {
        for (var i in json) {
          var { language, linesOfCode } = json[i];

          if (language.toLowerCase() == "total") {
            totalLoc = linesOfCode;
          } else if (loc.languages.includes(language)) { // if language already in list, add onto the lines of code
            var pt = loc.languages.indexOf(language);
            setLoc({
              linesOfCode: loc.linesOfCode[pt] + linesOfCode,
            })
          } else if (!avoidLanguages.includes(language)) {
            setLoc({
              languages: loc.languages.push(language),
              linesOfCode: loc.linesOfCode.push(linesOfCode),
            })
          }
        }
      })
    .catch(e => console.error(e));
    // }
  }, []);

  return (
    <React.Fragment>
      <AnchorPoint name="Intro" id="intro-anchor"></AnchorPoint>
      <StyledWrapper>
        <H2Style>Intro & About Me ❤</H2Style>
        <StyledWrapper>
          <Box>
            <H3Style> Current Coursework </H3Style>
            <ULWrapper>
              <LIWrapper> Intro to ML (Python, Jupyter Notebook) </LIWrapper>
              <LIWrapper> Deep Learning (Jupyter Notebook) </LIWrapper>
              <LIWrapper> (Auditing) Natural Language Processing </LIWrapper>
              <LIWrapper> (Auditing) Computer Architecture (C) </LIWrapper>
            </ULWrapper>
            <H3Style> Electrical Engineering and Computer Science Major </H3Style>
            <ULWrapper>
              <LIWrapper> Intro to CS (Python, Scheme, SQL) </LIWrapper>
              <LIWrapper> Data Structures & Algorithms (Java) </LIWrapper>
              <LIWrapper> Discrete Math and Probability Theory </LIWrapper>
              <LIWrapper> Probability and Random Processes (Jupyter Notebook) </LIWrapper>
              <LIWrapper> Optimization Models in Engineering (Jupyter Notebook) </LIWrapper>
              <LIWrapper> Designing Information Devices and Systems (Python) </LIWrapper>
            </ULWrapper>
            <H3Style> Linguistics Minor </H3Style>
            <ULWrapper>
              <LIWrapper> Intro to Linguistics </LIWrapper>
              <LIWrapper> Intro to Syntax </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Languages/Software Skills </H3Style>
            <Rows>
              <Cols>
              <h4> Languages </h4>
                <LIWrapper> JavaScript </LIWrapper>
                <LIWrapper> Python </LIWrapper>
                <LIWrapper> Java </LIWrapper>
                <LIWrapper> HTML/CSS </LIWrapper>
                <LIWrapper> Kotlin </LIWrapper>
                <LIWrapper> Swift </LIWrapper>
                <LIWrapper> C/C++ </LIWrapper>
              </Cols>
              <Cols>
              <h4> Other </h4>
                <LIWrapper> PyTorch </LIWrapper>
                <LIWrapper> COMSOL </LIWrapper>
                <LIWrapper> AutoCAD </LIWrapper>
                <LIWrapper> Tensorflow </LIWrapper>
                <LIWrapper> React </LIWrapper>
                <LIWrapper> Jupyter Notebook </LIWrapper>
                <LIWrapper> MATLAB </LIWrapper>
                <LIWrapper> SolidWorks </LIWrapper>
                <LIWrapper> Photoshop, Illustrator </LIWrapper>
              </Cols>
            </Rows>
            {/*<div>
              <h1> Lines of Code: </h1>
                <h4> Languages: Thing 1, Thing 2 </h4>
                <h4> Lines of code for each: 1, 2 </h4>
                <h4> Total lines of code: 3 </h4>
            </div>*/}
          </Box>
          <Box>
            <H3Style> Skills </H3Style>
            <ULWrapper>
              <LIWrapper> Data visualization and simulation softwares for research </LIWrapper>
              <LIWrapper> Building software tools for use around offices and within academia </LIWrapper>
              <LIWrapper> Designing engineering systems for real-world use in Engineers Without Borders </LIWrapper>
              <LIWrapper> EE and CS hands-on experience and extending course projects beyond the classroom </LIWrapper>
              <LIWrapper> Mathematical skills to understand in-depth background on Machine Learning processes </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Clubs </H3Style>
            <ULWrapper>
              <LIWrapper> Engineers Without Borders
                <PStyle>
                  Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community, <br />
                  Starting new project next semester: hoping for a local project toward helping provide for the homeless in Berkeley/SF areas <br />
                  Committee member: events coordinator and media outreach
                </PStyle>
              </LIWrapper>
              <LIWrapper> Association of Women in EE&CS
                <PStyle>
                  Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world <br />
                  Committee Member
                </PStyle>
              </LIWrapper>
              <LIWrapper> Computer Science Kickstart
                <PStyle>
                  Intro to computer science week for female pre-freshmen, <br />
                  Participated in the program myself when I entered Berkeley and gave back as a committee member on Industrial Relations
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
