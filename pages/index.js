import React from 'react';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components';
import { theme } from '../src/styles';
const { colors, fonts, fontSizes, displays } = theme;

// can FINALLY use flexbox perhaps : calhacks.org/flexbox
// position: relative; to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

const StyledWrapper = styled.div`
  background: ${colors.darkGray} url('../static/starting-background.png') no-repeat center;
  background-size: 100% 100%;
  overflow: auto;
`;

const Home = () => (
  <StyledWrapper>
    <Header />

    <Nav />

    <Welcome />
    <Intro />
    <Portfolio />
    <ContactMe />

    <Footer />

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: ${fonts.Lucida};
        background-color: ${colors.bodyBackground};
      }
      header {
        position: fixed;
        top: 0;
        transition: top 0.2s ease-in-out;
        width: 100%;
      }
      .nav-up {
        top: -60px;
      }
      #car {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
      #car:hover {opacity: 0.7;}
      #map {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
      #map:hover {opacity: 0.7;}
      #randrooms {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
      #randrooms:hover {opacity: 0.7;}
      #boss {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
      #boss:hover {opacity: 0.7;}

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.9);
      }
      .modal-content {
        margin: auto;
        display: block;
        width: 80%;
        -webkit-animation-name: zoom;
        -webkit-animation-duration: 0.6s;
        animation-name: zoom;
        animation-duration: 0.6s;
      }
      @-webkit-keyframes zoom {
        from {-webkit-transform:scale(0)}
        to {-webkit-transform:scale(1)}
      }
      @keyframes zoom {
        from {transform:scale(0)}
        to {transform:scale(1)}
      }
      .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
      }
      .close:hover,
      .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
      }
      @media only screen and (max-width: 700px){
        .modal-content {
          width: 100%;
        }
      }
      .body-background {
        background: ${colors.darkGray} url('../static/starting-background.png') no-repeat center;
        background-size: 100% 100%;
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
        text-shadow: 2px 2px black;
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
        text-shadow: 2px 2px black;
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
        justify-content: center;
      	font-size: 36px;
        margin: 75px 0px;
        text-shadow: 2px 2px black;
      }
      .last_section {
      	font-size: 36px;
        padding: 150px 0px 35px;
        text-shadow: 2px 2px black;
      }
      .contact-me {
        text-align: center;
        font-size: 18px;
        line-height: 1.5;
        margin: 30px 15px 240px;
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
        font-family: ${fonts.Lucida};
      }
      li {
        color: white;
        font-family: ${fonts.Lucida};
        margin: 5px 0px;
      }
      h1 {
        color: white;
        font-family: ${fonts.Lucida};
      }
      h2 {
        color: white;
        font-family: ${fonts.Lucida};
      }
      h3 {
        color: white;
        font-family: ${fonts.Lucida};
      }
      p {
        color: white;
        font-family: ${fonts.Lucida};
      }
      a {
        color: white;
        font-family: ${fonts.Lucida};
        text-decoration: none;
      }
      a:hover {
        color: ${colors.skyBlue};
      }
      body {
        padding-top: 60px;
      }
    `}</style>

  </StyledWrapper>
);

export default Home;
