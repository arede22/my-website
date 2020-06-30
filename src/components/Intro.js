import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;

// export main component
export default function Intro() {
  return (
    <span className="about">
      <a name="About"></a> <h2 className='section'>About</h2>
      <div>
        <div className='three-boxes'>
          <div className='box'>
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
          </div>
          <div className='box'>
            <h3> Languages/Software Skills </h3>
              <ul className='rows'>
                <div className='cols'>
                  <li> Kotlin </li>
                  <li> JavaScript </li>
                  <li> Python </li>
                  <li> PyTorch </li>
                  <li> C/C++ </li>
                  <li> AutoCAD </li>
                  <li> COMSOL </li>
                  <li> Photoshop </li>
                </div>
                <div className='cols'>
                  <li> Swift </li>
                  <li> HTML/CSS </li>
                  <li> Java </li>
                  <li> Tensorflow </li>
                  <li> React </li>
                  <li> MATLAB </li>
                  <li> SolidWorks </li>
                </div>
              </ul>
            <h3> Skills </h3>
              <ul>
                <li> Data visualization and simulation softwares used practically for research </li>
                <li> Building software tools for use around offices and within academia </li>
                <li> Planning and designing engineering systems for real-world use in Engineers Without Borders </li>
                <li> EE and CS hands-on experience and extending course projects beyond the classroom </li>
                <li> Mathematical skills to understand in-depth background on Machine Learning processes </li>
                <li> People skills, smooth communication, & true personality </li>
              </ul>
          </div>
          <div className='box'>
            <h3> Exploring pet projects (more below) </h3>
              <ul>
                <li> Safety app around Berkeley for Cal students </li>
                <li> Improving on voice-activated car built last semester </li>
                <li> Learning graphic design and animation software </li>
                <li> Contributing to friends' personal projects </li>
                <li> Exploring beginner projects using NLP analysis with AI/ML </li>
              </ul>
          </div>
        </div>
        <div className='two-boxes'>
          <div className='box'>
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
          </div>
          <div className='box'>
            <h3> Past work experience </h3>
              <ul>
                <li> (Computational Linguistics) Research Intern @ICSI (International Computer Science Institute) -- UC-Berkeley, Jan 2020 -- Current
                  <ul>
                    <li> Predicting the semantic components from morphologically complex words in polysynthetic languages of Karuk and Yurok </li>
                  </ul>
                </li>
                <li> Software Engineering Intern @Pulse Q&A -- SF, Summer 2019
                  <ul>
                    <li> Limited personnel previously led to outsourcing manual labor </li>
                    <li> Automated internal tools improved efficiency of office (allowed focus on increasing traffic on the service's platform, marketing efforts, and bettering market-fit) </li>
                  </ul>
                </li>
                <li> (EECS) Research Intern @Jadoo Tech -- UC-Berkeley, Feb-Sept 2019
                  <ul>
                    <li> Conducted research in physics theoretical equations and experiments for start-up in UC-Berkeley </li>
                  </ul>
                </li>
                <li> (EECS) Research Intern @Feng Labs -- CWRU, 2015-2018
                  <ul>
                    <li> Quantified properties of metastatic breast cancer cells using MEMS microsensors </li>
                  </ul>
                </li>
                <li> IT Hub Intern @Hathaway Brown -- OH, 2015-2018
                  <ul>
                    <li> Both worked and volunteered at high-school's IT Helpdesk </li>
                  </ul>
                </li>
              </ul>
          </div>
        </div>
      </div>

      <style jsx> {`
        .section {
          text-align: center;
          justify-content: center;
        	font-size: 36px;
          margin: 75px 0px;
          text-shadow: 2px 2px black;
        }
        .box {
          background-color: ${colors.halfTransparentGray};
          border-radius: 5px;
          overflow-x: auto;
          padding: 7.5px 20px 20px;
        }
        .rows {
          display: flex;
        }
        .cols {
          flex: 50%;
        }
        .three-boxes {
          display: grid;
          grid-template-columns: 400px 400px 400px;
          grid-gap: 20px;
          overflow-x: auto;
          margin: 0px 60px 20px;
        }
        .two-boxes {
          display: grid;
          grid-template-columns: 610px 610px;
          grid-gap: 20px;
          overflow-x: auto;
          margin: 0px 60px;
        }

        .button {
          width: auto;
          border: 1px solid white;
          border-radius: 6px;
          padding: 10px;
          margin-bottom: 10px;
        }
        ul {
          color: white;
          font-family: ${fonts.Lucida};
        }
        li {
          color: white;
          font-family: ${fonts.Lucida};
          margin: 5px 0px;
        }
        h1 {
          color: white;
          font-family: ${fonts.Lucida};
        }
        h2 {
          color: white;
          font-family: ${fonts.Lucida};
        }
        h3 {
          color: white;
          font-family: ${fonts.Lucida};
        }
        p {
          color: white;
          font-family: ${fonts.Lucida};
        }
        a {
          color: white;
          font-family: ${fonts.Lucida};
          text-decoration: none;
        }
        a:hover {
          color: ${colors.skyBlue};
        }
        body {
          padding-top: 60px;
        }


      `} </style>

    </span>

  )
};
