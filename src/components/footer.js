import React from 'react';
import { theme } from '../styles';
import styled, { css } from 'styled-components';
const { colors, fontSizes, fonts, displays } = theme;

const stat = '../static/footer'

const links = [
  { href: 'mailto:arede22@berkeley.edu', src: stat + '/email' },
  { href: 'https://www.instagram.com/berk_eng_doodler/', src: stat + '/insta' },
  { href: 'https://www.linkedin.com/in/anikarede/', src: stat + '/linkedin' },
  { href: 'https://github.com/arede22', src: stat + '/github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.src}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
})

function Footer() {
  return (
    <center>
      <footer className="signature">
        <ul className="contacts">
          {links.map(({ key, href, src }) => (
            <li className="contact" key={key}>
              <a href={href} target="_blank"> <img src={src+'.png'} onMouseOver={e => {e.currentTarget.src = src + '-hover.png'}} onMouseOut={e => {e.currentTarget.src = src + '.png'}} /> </a>
            </li>
          ))}
        </ul>
        <div> <button style={{color: colors.lightGray, fontSize: fontSizes.lg, fontFamily: fonts.Lucida}}> <a href='/' style={{textDecoration:'none', color: 'black'}}>/\ Top</a> </button> </div>
        <div> <p style={{color: 'white'}}>
          Made by Anika Rede | <a target="_blank" href="https://github.com/arede22/my-website" style={{color: colors.skyBlue, textDecoration: "none"}}> GitHub </a>
        </p> </div>
      </footer>

      <style jsx>{`
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
        p {
          text-align: center;
        }
      `}</style>
    </center>
  )
}

export default Footer
