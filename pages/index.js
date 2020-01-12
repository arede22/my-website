import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'


const links = [
  { href: 'mailto:arede22@berkeley.edu', source: '../static/footer/email' },
  { href: 'https://www.instagram.com/rede.anika/', source: '../static/footer/insta' },
  { href: 'https://www.linkedin.com/in/anikarede/', source: '../static/footer/linkedin' },
  { href: 'https://github.com/arede22', source: '../static/footer/github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.source}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
})


const Home = () => (
  <div className="imagehere">
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../static/favicon/site.webmanifest"/>

      <title>Anika Rede: Software Engineering</title>
    </Head>
    <Nav />

    <center> <h1 className='title'>Hi, I'm Anika Rede. </h1>
    <img src="../static/about/profile.jpeg" alt="Anika Rede" /> </center>
    <div className='hero'>
      <p>I am a sophomore in UC Berkeley studying EECS (major) and Linguistics (minor). My areas of interest lie in AI, NLP, and mobile development.
      <br/>I am currently looking for software engineering internship positions for summer 2020. <br/> </p>
      <div className="C"> <a className='button' href='../static/about/resume.pdf' target="_blank"> Resumé </a> </div>
      <p> Take a quick peek at my resumé! </p>
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
            <ul> <li> Javascript </li> <li> HTML </li> <li> CSS </li> <li> Python </li> <li> Scheme </li> <li> Java </li> <li> React </li> <li> C </li> </ul>
          <h3> Skills </h3>
            <ul> <li> Data visualization and simulation softwares (COMSOL, AutoCAD, MATLAB, SolidWorks) </li> <li> EE and CS knowledge and hands-on experience </li> <li> People skills, smooth communication, real personality </li> </ul>
        </div>
        <div className='box'>
          <h3> Clubs </h3>
            <ul> <li> Engineers Without Borders <p> Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community <br/> Starting new domestic project next semester </p> </li> <li> Computer Science Kickstart <p> Intro to computer science week for female pre-freshmen <br/> Participated in the program myself when I entered Berkeley and giving back as a committee member </p> </li> <li> Association of Women in EECS <p> Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world </p> </li> </ul>
        </div>
      </div>
      <div className='hero2'>
        <div className='box'>
          <h3> Past work experience </h3>
            <ul> <li> Software Engineering Intern @Pulse Q&A -- SF, Summer 2019 <p> Limited personnel previously led to outsourcing manual labor <br/> Automated internal tools improved efficiency of office (allowed focus on increasing traffic on the service's platform, marketing efforts, and bettering market-fit) </p> </li> <li> Research Intern @Jadoo Tech -- UC-Berkeley, Feb-Sept 2019 <p> Conducted research in physics theoretical equations and experiments for start-up in UC-Berkeley </p> </li> <li> Research Intern @Feng Labs -- CWRU, 2015-2018 <p> Quantified properties of metastatic breast cancer cells using MEMS microsensors </p> </li> <li> IT Hub Intern -- OH high-school <p> Both worked and volunteered at high-school's IT Helpdesk </p> </li> </ul>
        </div>
        <div className='box'>
          <h3> Personal projects </h3>
            <p> Currently working on: <ul> <li> Personal website using React & Next.js</li><li> Safety app for Berkeley using Swift </li> <li>Gameboy game using GB Studio </li> </ul> </p>
        </div>
      </div>
    </div>
{/*        <a name="Research"></a>
            <h2 className='section'>Research</h2>
          <div className='hero1'>
          <div className='box'>
            <h3> Papers </h3>
            <ul> <li> Personal manuscript </li> <li> IEEE MEMS published paper </li> </ul>
            </div>
            <div className='box'>
            <h3> Past research experience </h3>
            <ul> <li> Feng Labs (2015-8) -- Joint EECS-BME research in measuring properties of metastatic cancer cells using uniquely-created micro-sensors: Awards 2018 Siemens Semi-Finalist; Presented in 2018 National AJAS and JSHS conferences </li> <li> Jadoo Tech (Feb 2019-Sept 2019) -- EECS lab worked with founder of startup as part of URAP to research different methods of proving his nanosensors' accuracies mainly through visualization and understanding physics concepts to derive simulations of outcomes to compare with for accuracy of experimental results </li> </ul>
            </div>
            <div className='box'>
            <h3> Current research efforts </h3>
            <p> Going into second semester sophomore year, will join a linguistics research position in view of my interest in NLP and to further knowledge in my Ling minor </p>
            </div>
            <div>
            <h3 className="CV"> Take a quick peek at my CV if you want! </h3> <a className='button' href='../static/resume.pdf' target="_blank"> CV </a> </div>
    </div> */}
    <a name="Portfolio"></a> <h2 className='section'> Portfolio </h2>
    <div className='hero1'>
      <div className='box'>
        <h3> Class projects and extensions </h3>
          <p> Class projects and extensions thereof </p>
      </div>
      <div className='box'>
        <h3> Personal projects </h3>
          <p> Current projects: personal website, safety app </p>
          <p> Projected projects: modified game like gameboy </p>
      </div>
    </div>
    <div className='hero'>
        <a name="Contact-Me"></a> <h2 className='last_section'> Contact Me </h2>
        <p> Super excited you browsed through my website, please contact me by whatever method might be best. Links to Email, Instagram, LinkedIn, and Github below! </p>
    </div>

    <footer className="signature">
      <div className="flex-bw">
        <img src="../static/footer/macho-cat.png" alt="macho-cat" />
        <img src="../static/footer/coffee-mug.png" alt="coffee-mug" />
      </div>
      <ul className="A">
        {links.map(({ key, href, source }) => (
          <li className="B" key={key}>
            <a href={href}><img src={source+'.png'} onmouseover={'this.src=' + source +'-hover.png'} onmouseout={'this.src='+source+'.png'} /> </a>
          </li>
        ))}
      </ul>
    </footer>

    <style jsx>{`
      .imagehere {
        background-image: url('../static/starting-background.png');
        background-repeat: no-repeat;
        background-size: cover;
      }
      .title {
        background-color: rgba(129, 207, 224, 0.4);
        color: white;
        width: 50%;
        font-size: 48px;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.15;
        display: flex;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
        margin-top: 100px;
        margin-bottom: 40px;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-right: 10px;
        padding-left: 10px;
      }
      .hero {
        width: 100%;
        color: white;
        text-align: center;
        margin-left: 20px;
      }
      .hero1 {
        width: 100%;
        color: white;
        display: grid;
        grid-template-columns: 400px 400px 400px;
        grid-gap: 20px;
        margin-left: 25px;
        margin-bottom: 20px;
      }
      .hero2 {
        width: 100%;
        color: white;
        display: grid;
        grid-template-columns: 600px 600px;
        grid-gap: 20px;
        margin-left: 25px;
      }
      .box {
        background-color: rgba(166, 166, 166, 0.5);
        color: white;
        border-radius: 5px;
        padding: 20px;
        padding-top: 7.5px;
      }
      .section {
      	color: white;
        font-family: Arial, Helvetica, sans-serif;
      	font-size: 32px;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 25px;
      }
      .last_section {
      	color: white;
        font-family: Arial, Helvetica, sans-serif;
      	font-size: 32px;
        padding-top: 100px;
        padding-bottom: 50px;
        margin-left: 0px;
      }
      .flex-bw {
        display: flex;
        justify-content: space-between;
      }
      .signature {
        width: 70%;
        padding-top: 40px;
        padding-bottom: 40px;
      }
      .button {
        width: auto;
        color: white;
        border: 1px;
        border-style: solid;
        border-color: white;
        border-radius: 4px;
        padding: 10px;
      }
      .A {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
      }
      .B {
        display: flex;
      }
      .C {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 17px;
      }
    `}</style>
  </div>
)

export default Home
