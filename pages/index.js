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

const imgStyle = {
  padding: '10px',
  borderColor: 'white',
  borderWidth: '2px',
  borderStyle: 'double',
}

const contactStyle = {
  backgroundColor: 'rgba(129, 207, 224, 0.4)',
  width: '60%',
  fontSize: '18px',
  borderRadius: '15px',
  paddingTop: '25px',
  paddingBottom: '25px',
  paddingRight: '0px',
  paddingLeft: '0px',
}

const Home = () => (
  <div className='imagehere'>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../static/favicon/site.webmanifest"/>

      <title>Anika Rede: Software Engineer</title>
    </Head>
    <Nav />

    <center>
      <h1 className='title'>Hi, I'm Anika Rede. </h1>
      <img src="../static/about/profile.jpeg" alt="Anika Rede" hspace="5" style={imgStyle}/>
    </center>
    <div className='hero0'>
      <p>I am a sophomore in UC Berkeley studying EECS (major) and Linguistics (minor). My areas of interest lie in AI, NLP, and mobile development.
      <br/>I am currently looking for software engineering internship positions for summer 2020. </p>
      <center>
        <div className="resume-box">
          <p> Take a quick peek at my resumé! </p>
          <a className='button' href='../static/about/resume.pdf' target="_blank"> Resumé </a>
        </div>
      </center>
    </div>

    <a name="About"></a> <h2 className='section'>About</h2>
    <div>
      <div className='hero1'>
        <div className='box'>
          <h3> Major Coursework </h3>
            <ul> <li> Intro to Computer Science </li> <li> Data Structures & Algorithms </li> <li> Computer Architecture </li> <li> Discrete Mathematics and Probability Theory </li> <li> Designing Information Devices and Systems </li> <li> Optimization Models in Engineering </li> <li> Probability and Random Processes </li> </ul>
          <h3> Minor Coursework </h3>
            <ul> <li> Intro to Linguistics </li> <li> Intro to Syntax and Semantics </li> </ul>
        </div>
        <div className='box'>
          <h3> Languages </h3>
            <ul className='cols'> <div className='langs'> <li> Javascript </li> <li> HTML </li> <li> CSS </li> <li> Python </li> </div> <div className='langs'> <li> Scheme </li> <li> Java </li> <li> React </li> <li> C </li> </div> </ul>
          <h3> Skills </h3>
            <ul> <li> Data visualization and simulation softwares (COMSOL, AutoCAD, MATLAB, SolidWorks) </li> <li> EE and CS knowledge and hands-on experience </li> <li> People skills, smooth communication, real personality </li> </ul>
        </div>
        <div className='box'>
          <h3> Clubs </h3>
            <ul> <li> Engineers Without Borders <ul> <li> Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community </li> <li> Starting new domestic project next semester </li> </ul> </li> <li> Computer Science Kickstart <ul> <li> Intro to computer science week for female pre-freshmen </li> <li> Participated in the program myself when I entered Berkeley and giving back as a committee member </li> </ul> </li> <li> Association of Women in EECS <ul> <li> Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world </li> </ul> </li> </ul>
        </div>
      </div>
      <div className='hero2'>
        <div className='box'>
          <h3> Past work experience </h3>
            <ul> <li> Software Engineering Intern @Pulse Q&A -- SF, Summer 2019 <ul> <li> Limited personnel previously led to outsourcing manual labor </li> <li> Automated internal tools improved efficiency of office (allowed focus on increasing traffic on the service's platform, marketing efforts, and bettering market-fit) </li> </ul> </li> <li> Research Intern @Jadoo Tech -- UC-Berkeley, Feb-Sept 2019 <ul> <li> Conducted research in physics theoretical equations and experiments for start-up in UC-Berkeley </li> </ul> </li> <li> Research Intern @Feng Labs -- CWRU, 2015-2018 <ul> <li> Quantified properties of metastatic breast cancer cells using MEMS microsensors </li> </ul> </li> <li> IT Hub Intern @Hathaway Brown-- OH high-school <ul> <li> Both worked and volunteered at high-school's IT Helpdesk </li> </ul> </li> </ul>
        </div>
        <div className='box'>
          <h3> Exploring pet projects </h3>
            <ul> <li> CS personal website, safety app around Berkeley </li>
            <li> Exploring ideas of NLP analysis with AI/ML </li>
            <li> Modifying S1XT33N car from last semester to be hooked up bluetooth, wifi </li>
            <li> Graphic design intro to Photoshop, Illustrator, Maya </li> </ul>
        </div>
      </div>
    </div>

    <a name="Portfolio"></a> <h2 className='section'> Portfolio </h2>
    <div className='hero2'>
      <div className='box'>
        <h3> Class projects and extensions </h3>
          <ul> <li> S1XT33N on GitHub </li> <li> universe physics simulation link: <a href='https://www.youtube.com/watch?v=NzoLAY44HrQ' target="_blank"> click here </a> </li> <li> cs61b game link: <a href='https://www.youtube.com/watch?v=cdlxhQVUIro' target="_blank"> click here </a> </li> </ul>
      </div>
      <div className='box'>
        <h3> Personal projects </h3>
          <p> Current projects: personal website React and Next.js, safety app Swift </p>
          <p> Projected projects: Gameboy game using GB Studio </p>
      </div>
    </div>

    <div className='hero3'>
      <a name="Contact-Me"></a> <h2 className='last_section'> Contact Me </h2>
      <center>
        <p style={contactStyle}> Super excited you browsed through my website! <br /> Please contact me by whatever method might be best though e-mail works best. </p>
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
      .imagehere {
        background-image: url('../static/starting-background.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        overflow: hidden;
      }
      .title {
        background-color: rgba(129, 207, 224, 0.4);
        color: white;
        width: 50%;
        font-size: 48px;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        line-height: 1.15;
        display: flex;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
        margin-top: 120px;
        margin-bottom: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-right: 5px;
        padding-left: 5px;
      }
      .resume-box {
        background-color: rgba(129, 207, 224, 0.4);
        width: 30%;
        font-size: 18px;
        border-radius: 15px;
        padding: 10px;
        padding-bottom: 35px;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .hero0 {
        width: 100%;
        color: white;
        font-size: 16px;
        text-align: center;
        line-height: 1.5;
        margin-left: 20px;
      }
      .hero1 {
        width: 100%;
        color: white;
        display: grid;
        grid-template-columns: 400px 400px 400px;
        grid-gap: 20px;
        margin-left: 70px;
        margin-bottom: 20px;
      }
      .hero2 {
        width: 100%;
        color: white;
        display: grid;
        grid-template-columns: 610px 610px;
        grid-gap: 20px;
        margin-left: 70px;
      }
      .hero3 {
        width: 100%;
        color: white;
        font-size: 18px;
        text-align: center;
        line-height: 1.5;
        margin-right: 15px;
        margin-left: 15px;
        margin-bottom: 120px;
      }
      .box {
        background-color: rgba(166, 166, 166, 0.5);
        color: white;
        border-radius: 5px;
        padding: 20px;
        padding-top: 7.5px;
      }
      .cols {
        display: flex;
      }
      .langs {
        flex: 50%;
      }
      .section {
      	color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      	font-size: 36px;
        text-align: center;
        margin-top: 75px;
        margin-bottom: 75px;
      }
      .last_section {
      	color: white;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      	font-size: 36px;
        padding-top: 180px;
        padding-bottom: 35px;
      }
      .flex-bw {
        display: flex;
        justify-content: space-between;
        margin-right: 75px;
        margin-left: 75px;
        padding-right: 20px;
        padding-left: 20px;
      }
      .signature {
        width: 80%;
        align: center;
        padding-top: 40px;
        margin-top: 25px;
        margin-bottom: 25px;
      }
      .button {
        width: auto;
        color: white;
        border: 1px;
        border-style: solid;
        border-color: white;
        border-radius: 6px;
        padding: 10px;
        margin-bottom: 10px;
      }
      .contacts {
        background-color: rgba(166, 166, 166, 0.3);
        display: flex;
        justify-content: space-around;
        padding: 10px;
        margin-top: 0px;
        margin-bottom: 25px;
        border-top: 3px solid gray;
      }
      .contact {
        display: flex;
        padding-right: 15px;
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      a {
        color: white;
        text-decoration: none;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      a:hover {
        color: rgba(197, 239, 247, 1);
      }
      p {
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      h1 {
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      h2 {
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      h3 {
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      ul {
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }
      li {
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
)

export default Home
