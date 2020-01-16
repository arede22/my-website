import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const links = [
  { href: 'mailto:arede22@berkeley.edu', source: '../static/footer/contact-me/email' },
  { href: 'https://www.instagram.com/berk_eng_doodler/', source: '../static/footer/contact-me/insta' },
  { href: 'https://www.linkedin.com/in/anikarede/', source: '../static/footer/contact-me/linkedin' },
  { href: 'https://github.com/arede22', source: '../static/footer/contact-me/github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.source}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
})

const profPic = {
  paddingLeft: "41%",
}

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
    </Head>

    <Nav />

    <span className="intro">
      <center>
        <h1 className='welcome-title'>Hi, I'm Anika Rede. </h1>
      </center>
      <img src="../static/profile.png" alt="Anika Rede" style={profPic} />
      <div className='welcome-body'>
        <p>I am a sophomore in UC Berkeley studying EECS (major) and Linguistics (minor). My areas of interest lie in AI, NLP, and mobile development.
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
                <li> Computer Architecture </li>
                <li> Discrete Mathematics and Probability Theory </li>
                <li> Designing Information Devices and Systems </li>
                <li> Optimization Models in Engineering </li>
                <li> Probability and Random Processes </li>
              </ul>
            <h3> Minor Coursework </h3>
              <ul>
                <li> Intro to Linguistics </li>
                <li> Intro to Syntax and Semantics </li>
              </ul>
          </div>
          <div className='box'>
            <h3> Languages </h3>
              <ul className='rows'>
                <div className='cols'>
                  <li> Javascript </li>
                  <li> HTML </li>
                  <li> CSS </li>
                  <li> Python </li>
                </div>
                <div className='cols'>
                  <li> Scheme </li>
                  <li> Java </li>
                  <li> React </li>
                  <li> C </li>
                </div>
              </ul>
            <h3> Skills </h3>
              <ul>
                <li> Data visualization and simulation softwares (COMSOL, AutoCAD, MATLAB, SolidWorks) </li>
                <li> EE and CS knowledge and hands-on experience </li>
                <li> People skills, smooth communication, real personality </li>
              </ul>
          </div>
          <div className='box'>
            <h3> Exploring pet projects (more below) </h3>
              <ul>
                <li> Safety app around Berkeley for Cal students </li>
                <li> Improving on voice-activated car built last semester </li>
                <li> Learning graphic design and animation software </li>
                <li> Exploring projects using NLP analysis with AI/ML </li>
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
                    <li> Starting new domestic project next semester </li>
                  </ul>
                </li>
                <li> Computer Science Kickstart
                  <ul>
                    <li> Intro to computer science week for female pre-freshmen </li>
                    <li> Participated in the program myself when I entered Berkeley and giving back as a committee member </li>
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
                <li> Software Engineering Intern @Pulse Q&A -- SF, Summer 2019
                  <ul>
                    <li> Limited personnel previously led to outsourcing manual labor </li>
                    <li> Automated internal tools improved efficiency of office (allowed focus on increasing traffic on the service's platform, marketing efforts, and bettering market-fit) </li>
                  </ul>
                </li>
                <li> Research Intern @Jadoo Tech -- UC-Berkeley, Feb-Sept 2019
                  <ul>
                    <li> Conducted research in physics theoretical equations and experiments for start-up in UC-Berkeley </li>
                  </ul>
                </li>
                <li> Research Intern @Feng Labs -- CWRU, 2015-2018
                  <ul>
                    <li> Quantified properties of metastatic breast cancer cells using MEMS microsensors </li>
                  </ul>
                </li>
                <li> IT Hub Intern @Hathaway Brown-- OH high-school
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
      <div style={{marginLeft: '75px', marginRight: '75px'}}>
        <div className='box' style={{marginBottom: '10px'}}>
          <h3> Class projects and extensions </h3>
            <ul>
              <li> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA </li>
                <img src="../static/portfolio/car.png" alt="car" height="30%" width="30%" vspace="10" style={centerPic} />
              <li> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation </li>
                <img src="../static/portfolio/map.png" alt="map" height="40%" width="40%" vspace="10" style={centerPic} />
              <li> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level: </li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <img src="../static/portfolio/random-room.png" alt="random rooms" height="40%" width="40%" vspace="10" />
                  <img src="../static/portfolio/boss.png" alt="boss level" height="40%" width="40%" vspace="10" />
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
        <div className="flex-bw">
          <img src="../static/footer/macho-cat.png" alt="macho-cat" />
          <img src="../static/footer/coffee-mug.png" alt="coffee-mug" />
        </div>
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
      }
      .last_section {
      	font-size: 36px;
        padding: 150px 0px 35px;
      }
      .contact-me {
        text-align: center;
        font-size: 18px;
        line-height: 1.5;
        margin: 0px 15px 120px;
      }
      .flex-bw {
        display: flex;
        justify-content: space-between;
        padding: 0px 20px;
        margin: 0% 9.5% 0% 6%;
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
    `}</style>
  </div>
)

export default Home
