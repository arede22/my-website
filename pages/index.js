import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const links = [
  { href: 'tel:440-731-0373', label: 'Phone' },
  { href: 'mailto:arede22@berkeley.edu', label: 'Email' },
  { href: 'https://www.linkedin.com/in/anika-rede-ab443ba1/', label: 'LinkedIn' },
  { href: 'https://github.com/arede22', label: 'GitHub' }

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})


const Home = () => (
  <div>
    <Head>
      <link rel="theanikarede" type="image/*" href="/static/favicon.ico"/>
      <title>Anika Rede: Software Engineering</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to the world of Anika Rede</h1>
      <p> Currently looking for software engineering internship positions for summer 2020. </p>
    </div>
    <div>
        <a name="About"></a>
            <h2 className='section'>About </h2>
            <p> EECS sophomore at UC Berkeley </p>
            <p> Interests in AI, NLP, and CV </p>
            <p> download either my CV for research or resume for work </p>
    </div>
    <div>
        <a name="Portfolio"></a>
            <h2 className='section'> Portfolio </h2>
                <p> projects on GitHub: modified game like gameboy </p>
                <p> personal website </p>
                <p> beginning steps of app </p>
    </div>
    <div>
        <a name="Contact-Me"></a>
            <h2 className='section'> Contact Me </h2>
    </div>

    <footer className="signature">
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
    </footer>

    <style jsx>{`
      .hero {
        width: 100%;
        color: white;
        margin-left: 20px;
      }
      .title {
        padding-bottom: 20px;
        margin: 0;
        width: 100%;
        padding-top: 15px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
      }
      .section {
      	color: white;
      	font-family: Times New Roman;
      	font-size: 32px;
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
      }
    `}</style>
  </div>
)

export default Home
