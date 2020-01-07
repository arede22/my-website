import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'


const links = [
  { href: 'mailto:arede22@berkeley.edu', source: '../static/email.png' },
  { href: 'https://www.instagram.com/rede.anika/', source: '../static/insta.png' },
  { href: 'https://www.linkedin.com/in/anika-rede-ab443ba1/', source: '../static/linkedin.png' },
  { href: 'https://github.com/arede22', source: '../static/github.png' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.source}`
  return link
})


const Home = () => (
  <div className="imagehere">
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"/>
      <link rel="manifest" href="../static/site.webmanifest"/>

      <title>Anika Rede: Software Engineering</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to the World of Anika Rede</h1>
      <center>
        <p> I'm Anika Rede, an EECS major Ling minor sophomore at UC Berkeley with interests in AI, NLP, and mobile development. Take a quick peek at my resumé! </p>
        <a className='button' href='../static/resume.pdf' target="_blank"> Resume </a>
        <p> Currently looking for software engineering internship positions for summer 2020. </p>
        <img src="../static/profile.jpeg" alt="Anika Rede"/>
      </center>
    </div>
    <div className='hero'>
        <a name="About"></a>
            <h2 className='section'>About</h2>
            <h3> Coursework </h3>
            <ul> <li> Intro to Computer Science </li> <li> Data Structures & Algorithms </li> <li> Computer Architecture </li> <li> Discrete Mathematics and Probability Theory </li> <li> Designing Information Devices and Systems </li> </ul>
            <h3> Languages </h3>
            <ul> <li> Javascript </li> <li> HTML </li> <li> CSS </li> <li> Python </li> <li> Scheme </li> <li> Java </li> <li> React </li> </ul>
            <h3> Skills </h3>
            <ul> </ul>
            <h3> Clubs </h3>
            <ul> <li> Engineers Without Borders <p> Panama Water Distribution Team, going into three semesters in the club, starting new project next semester we just finished up the project this past semester -- describe process a little </p> </li> <li> Computer Science Kickstart <p> women's intro computer science week for pre-frosh I participated in when I came into freshman year, in committees to contribute to next annual meeting and social club as well </p> </li> <li> Association of Women in EECS <p> mostly social club, events with sponsors and people coming in to talk woman to woman about how to succeed in the tech world -- inspiring to me though I am not in a leading position </p> </li> </ul>
            <h3> Past work experience </h3>
            <ul> <li> Internship with Pulse Q&A in SF summer 2019 </li> <li> other work includes part-time jobs as a barista in high-school café and student-worker at International Dining House and intern in IT Hub in high school </li> </ul>
            <h3> Personal projects </h3>
            <p> Currently working on personal website and a safety app and a little game </p>
    </div>
    <div className='hero'>
        <a name="Research"></a>
            <h2 className='section'>Research</h2>
            <h3> Papers </h3>
            <ul> <li> Personal manuscript </li> <li> IEEE MEMS published paper </li> </ul>
            <h3> Past research experience </h3>
            <ul> <li> Feng Labs (2015-8) -- Joint EECS-BME research in measuring properties of metastatic cancer cells using uniquely-created micro-sensors: Awards 2018 Siemens Semi-Finalist; Presented in 2018 National AJAS and JSHS conferences </li> <li> Jadoo Tech (Feb 2019-Sept 2019) -- EECS lab worked with founder of startup as part of URAP to research different methods of proving his nanosensors' accuracies mainly through visualization and understanding physics concepts to derive simulations of outcomes to compare with for accuracy of experimental results </li> </ul>
            <h3> Current research efforts </h3>
            <p> Going into second semester sophomore year, will join a linguistics research position in view of my interest in NLP and to further knowledge in my Ling minor </p>
            <center> <h3> Take a quick peek at my CV if you want! </h3> <a className='button' href='../static/resume.pdf' target="_blank"> CV </a> </center>
    </div>
    <div className='hero'>
        <a name="Portfolio"></a>
            <h2 className='section'> Portfolio </h2>
                <h3> Class projects and extensions </h3>
                <p> Class projects and extensions thereof </p>
                <h3> Personal projects </h3>
                <p> Current projects: personal website, safety app </p>
                <p> Projected projects: modified game like gameboy </p>
    </div>
    <div className='hero'>
        <a name="Contact-Me"></a>
            <h2 className='last_section'> Contact Me </h2>
              <p> Super excited you browsed through my website, please contact me by whatever method might be best. Links to Email, Instagram, LinkedIn, and Github below! </p>
    </div>

    <footer className="signature">
        <img src="../static/macho-cat.png" alt="macho-cat" />
        <ul className="A">
          {links.map(({ key, href, source }) => (
            <li className="B" key={key}>
              <a href={href}><img src={source} /> </a>
            </li>
          ))}
        </ul>
        <img src="../static/coffee-mug.png" alt="coffee-mug" />
    </footer>
// background-color: #616060;
    <style jsx>{`
      .imagehere {
        background-image: url('../static/starting-background.png');
        background-repeat: no-repeat;
        height: 100%;
      }
      .hero {
        width: 100%;
        color: white;
        margin-left: 20px;
      }
      .title {
        padding-bottom: 20px;
        margin-top: 100px;
        margin-bottom: 100px;
        width: 100%;
        padding-top: 15px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
      }
      .section {
      	color: white;
        font-family: Arial, Helvetica, sans-serif;
      	font-size: 32px;
        margin-left: 0px;
      }
      .last_section {
      	color: white;
        font-family: Arial, Helvetica, sans-serif;
      	font-size: 32px;
        margin-left: 0px;
        padding-top: 100px;
        padding-bottom: 100px;
      }
      .button {
        width: auto;
        color: white;
        border: 3px;
        border-style: solid;
        border-color: white;
        border-radius: 3px;
        padding: 1em;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 17px;
      }
      .B {
        display: flex;
      }
      .A {
        margin: 0;
        text-align: center;
        display: flex;
        justify-content: space-around;
      }
      .signature {
        width: 70%;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    `}</style>
  </div>
)

export default Home
