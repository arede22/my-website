import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../src/components/Nav.js'

const links = [
  { href: 'mailto:arede22@berkeley.edu', source: '../static/footer/contact-me/email' },
  { href: 'https://www.instagram.com/berk_eng_doodler/', source: '../static/footer/contact-me/insta' },
  { href: 'https://www.linkedin.com/in/anikarede/', source: '../static/footer/contact-me/linkedin' },
  { href: 'https://github.com/arede22', source: '../static/footer/contact-me/github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.source}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
})

const centerPic = {
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto'
}

var colors = {
  transparentBlue: "rgba(129, 207, 224, 0.4)",
  skyBlue: "rgba(197, 239, 247, 1)",
  halfTransparentGray: "rgba(166, 166, 166, 0.5)",
  transparentGray: "rgba(166, 166, 166, 0.3)",
  lightGray: "#cfcfcf",
  darkGray: "rgba(74, 72, 71, 1)"
};

const contactStyle = {
  backgroundColor: colors.transparentBlue,
  width: '60%',
  fontSize: '18px',
  borderRadius: '15px',
  paddingTop: '25px',
  paddingBottom: '25px',
  paddingRight: '10px',
  paddingLeft: '10px',
}

const Home = () => (
  <div className='body-background'>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../static/favicon/site.webmanifest"/>

      <title>Anika Rede: Software Engineer</title>

      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" />
      <script async src="../static/nav-up.js" />
      <script async src="../static/modal.js" />
    </Head>

    <header className="nav-down">
      <Nav />
    </header>

    <span className="intro">
      <center>
        <h1 className='welcome-title'>Hi, I'm Anika Rede. </h1>
      </center>
      <img src="../static/profile.png" alt="This is me!" style={{marginLeft: '41%'}}/>

      <div className='welcome-body'>
        <p>I am a sophomore in UC Berkeley studying Electrical Engineering and Computer Science (EECS) as my major
        <br /> with concentration on AI and ML and Linguistics as my minor.
        <br /> My areas of interest lie in applied Machine Learning, Natural Language Processing, and Cloud Computing.
        <br /> I am currently seeking software engineering internship positions for summer 2020. </p>
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
                <img id="car" src="../static/portfolio/car.png" alt="car" height="40%" width="40%" vspace="10" style={centerPic} />

                <div id="popCar" className="modal">
                  <span className="close" onClick="document.getElementById('popCar').style.display='none'">&times;</span>
                  <img className="modal-content" id="img01" style={{maxWidth: '700px;'}} />
                </div>

              <li> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation </li>
                <img id="map" src="../static/portfolio/map.png" alt="map" height="50%" width="50%" vspace="10" style={centerPic} />

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
        <p style={contactStyle}> Super excited you browsed through my website!
        <br /> Please contact me by whatever method might be best though e-mail works best. </p>
      </center>
    </div>

    <center>
      <footer className="signature">
        <ul className="contacts">
          {links.map(({ key, href, source }) => (
            <li className="contact" key={key}>
              <a href={href}> <img src={source+'.png'} onMouseOver={e => {e.currentTarget.src = source + '-hover.png'}} onMouseOut={e => {e.currentTarget.src = source + '.png'}} /> </a>
            </li>
          ))}
        </ul>
      </footer>
    </center>

    <style jsx>{`
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
        background-size: cover;
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
      .signature {
        width: 80%;
        align: center;
        padding-top: 40px;
        margin: 25px 0px;
      }
      .contact {
        display: flex;
        padding: 10px 15px;
      }
      .contacts {
        background-color: ${colors.transparentGray};
        display: flex;
        justify-content: space-around;
        border-top: 3px solid ${colors.lightGray};
        padding: 10px 25px;
        margin: 0px 15px 25px;
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
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      li {
        color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        margin: 5px 0px;
      }
      h1 {
        color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      h2 {
        color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      h3 {
        color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      p {
        color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      a {
        color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
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
