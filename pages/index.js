import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Meme from './meme'

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
      <title>Home</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>More to come ;)</h1>
      <Meme />
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
      }
      .title {
        padding-bottom: 20px;
        margin: 0;
        width: 100%;
        padding-top: 15px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
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
