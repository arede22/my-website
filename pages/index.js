import React from 'react';
import Link from 'next/link';
import { Nav, Modal, Footer, Header, Projects } from '../src/components';
import { theme } from '../src/styles';
const { colors, fonts, fontSizes, displays } = theme;

// can FINALLY use flexbox perhaps : calhacks.org/flexbox
// position: relative; to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

const Home = () => (
  <div className='body-background'>
    <Header />
    <Nav />
 {/*<span className="intro">
      <center>
        <h1 className='welcome-title'>Hi, I'm Anika Rede.</h1>
      </center>
      <img src="../static/profile.png" alt="This is me!" style={{marginLeft: '41%'}}/>

      <div className='welcome-body'>
        <p>I am a sophomore in UC Berkeley studying Electrical Engineering and Computer Science (EECS)
        <br /> concentrating in AI & ML with Linguistics as my minor.
        <br /> My areas of interest lie in ML, NLP, and Cloud Computing. </p>
        <center>
          <div className="resume-box">
            <p> Take a quick peek at my resumé! </p>
            <a className='button' href="resume.pdf" target="_blank"> Resumé </a>
          </div>
        </center>
      </div>
    </span>

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
    </span>

    <span className="portfolio">
      <a name="Portfolio"></a> <h2 className='section'> Portfolio </h2>
      <div className="two-boxes">
        <div className='box'>
          <h3> Class projects and extensions </h3>
            <ul>
              <li> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA </li>
                <img id="car" src="../static/portfolio/car.png" alt="car" height="40%" width="40%" vspace="10" style={displays.centerPic} />

                <div id="popCar" className="modal">
                  <span className="close" onClick="document.getElementById('popCar').style.display='none'">&times;</span>
                  <img className="modal-content" id="img01" style={{maxWidth: '700px;'}} />
                </div>

              <li> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation </li>
                <img id="map" src="../static/portfolio/map.png" alt="map" height="50%" width="50%" vspace="10" style={displays.centerPic} />

                <div id="popMap" className="modal">
                  <span className="close" onClick="document.getElementById('popMap').style.display='none'">&times;</span>
                  <img className="modal-content" id="img02" style={{maxHeight: '500px;'}}/>
                </div>

              <li> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level: </li>
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
                <center>
                  <a href='https://www.youtube.com/watch?v=cdlxhQVUIro' target="_blank"> Click here for demo </a>
                </center>
            </ul>
        </div>
        <div className='box'>
          <h3> Personal projects </h3>
            <ul>
              <li> Current projects:
                <ul>
                  <li> Personal website built with React and Next.js, allows playing with graphic design </li>
                  <li> Safety app around Berkeley for students built using Swift </li>
                  <li> Learning graphic design via Photoshop, Illustrator, and Maya </li>
                </ul>
              </li>
              <li> Projected projects:
                <ul>
                  <li> Modifying voice-activated car built last semester to be hooked up to bluetooth and Wi-Fi </li>
                  <li> Original pixel art Gameboy game built from scratch </li>
                  <li> Image analysis to interpret and translate language with NLP using AI/ML </li>
                </ul>
              </li>
            </ul>
        </div>
      </div>
    </span>

    <div className='contact-me'>
      <a name="Contact-Me"></a> <h2 className='last_section'> Contact Me </h2>
      <center>
        <p style={displays.contactStyle}> Super excited you browsed through my website!
        <br /> Please contact me by whatever method might be best though e-mail works best. </p>
      </center>
    </div>*/}

    <Footer />

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: ${fonts.Lucida};
        background-color: ${colors.bodyBackground};
      }
      header {
        position: fixed;
        top: 0;
        transition: top 0.2s ease-in-out;
        width: 100%;
      }
      .nav-up {
        top: -60px;
      }

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
      .body-background {
        background: ${colors.darkGray} url('../static/starting-background.png') no-repeat center;
        background-size: 100% 100%;
        overflow: auto;
      }
      .welcome-title {
        background-color: ${colors.transparentBlue};
        width: 50%;
        border-radius: 8px;
        text-align: center;
        font-size: 48px;
        padding: 30px 5px;
        margin: 110px 15px 30px;
        text-shadow: 2px 2px black;
      }
      .resume-box {
        background-color: ${colors.transparentBlue};
        width: 25%;
        border-radius: 15px;
        font-size: 18px;
        padding: 2.5px 10px 30px;
        margin: 20px 20px 30px;
      }
      .welcome-body {
        text-align: center;
        font-size: 16px;
        line-height: 1.5;
        margin: 5px 20px;
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
      .section {
        text-align: center;
        justify-content: center;
      	font-size: 36px;
        margin: 75px 0px;
        text-shadow: 2px 2px black;
      }
      .last_section {
      	font-size: 36px;
        padding: 150px 0px 35px;
        text-shadow: 2px 2px black;
      }
      .contact-me {
        text-align: center;
        font-size: 18px;
        line-height: 1.5;
        margin: 30px 15px 240px;
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
    `}</style>

  </div>
)

export default Home
