import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

// component did mount for if state or lifecycle required
// function if not (faster in general)

const links = [
  { href: 'mailto:arede22@berkeley.edu', source: '../static/footer/email' },
  { href: 'https://www.instagram.com/berk_eng_doodler/', source: '../static/footer/insta' },
  { href: 'https://www.linkedin.com/in/anikarede/', source: '../static/footer/linkedin' },
  { href: 'https://github.com/arede22', source: '../static/footer/github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.source}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
})

const Footer = () => (
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
    `}</style>
  </center>
)

export default Footer
