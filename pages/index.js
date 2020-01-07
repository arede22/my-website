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
      <p> Currently looking for software engineering internship positions for summer 2020. </p>
      <img src="../static/profile.jpeg" alt="Anika Rede"/>
    </div>
    <div className='hero'>
        <a name="About"></a>
            <h2 className='section'>About </h2>
            <p> EECS sophomore at UC Berkeley </p>
            <p> Interests in AI, NLP, and CV </p>
            <p> download either my CV for research or resume for work </p>
    </div>
    <div className='hero'>
        <a name="Portfolio"></a>
            <h2 className='section'> Portfolio </h2>
                <p> projects on GitHub: modified game like gameboy </p>
                <p> personal website </p>
                <p> beginning steps of app </p>
    </div>
    <div className='hero'>
        <a name="Contact-Me"></a>
            <h2 className='section'> Contact Me </h2>
    </div>

    <footer className="signature">
        <ul>
          {links.map(({ key, href, source }) => (
            <li key={key}>
              <a href={href}><img src={source} /> </a>
            </li>
          ))}
        </ul>
    </footer>

    <style jsx>{`
      .imagehere {
        background-color: black;
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
      a {
        color: white;
        text-decoration: none;
        font-size: 17px;
      }
      li {
        display: flex;
      }
      ul {
        margin: 0;
        text-align: center;
        display: flex;
        justify-content: space-around;
      }
      .signature {
        margin-top: 15px;
        padding-bottom: 30px;
      }
    `}</style>
  </div>
)

export default Home
