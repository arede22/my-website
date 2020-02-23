import React from 'react';
import PropTypes from 'prop-types';

// component did mount for if state or lifecycle required
// function if not (faster in general)

const Nav = () => (
  <nav>
    <ul>
      <li> <a href='/'> <a>Home</a> </a> </li>
      <li> <a href="#About">About</a> </li>
      <li> <a href="#Portfolio">Portfolio</a> </li>
      <li> <a href="#Contact-Me">Contact Me</a> </li>
      <li> <a href="resume.pdf" target="_blank"> Resume </a> </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        background-color: #1a1a1a;
      }
      nav {
        text-align: center;
        padding: 10px 0px;
        background-color: #303030;
      }
      ul {
        margin: 0;
        display: flex;
        text-align: center;
        justify-content: space-around;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 17px;
      }
      a:hover {
        color: rgba(129, 207, 224, 1);
      }
    `}</style>
  </nav>
)

export default Nav
