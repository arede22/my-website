import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;
// Coursework
// Skills
// Softwares and comfortability
// Currently exploring pet projects

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;

// export main component
export default function Portfolio() {
  return (

    <span className="portfolio">
      <a name="Portfolio"></a> <h2 className='section'> Portfolio </h2>
      <div className="two-boxes">
        <div className='box'>
          <h3> Class projects and extensions </h3>
            <ul>
              <li> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA </li>
                <img id="car" src="../static/portfolio/car.png" alt="car" height="40%" width="40%" vspace="10" style={displays.centerPic} />

                <div id="popCar" className="modal">
                  <span className="close" onClick="document.getElementById('popCar').style.display='none'">&times;</span>
                  <img className="modal-content" id="img01" style={{maxWidth: '700px;'}} />
                </div>

              <li> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation </li>
                <img id="map" src="../static/portfolio/map.png" alt="map" height="50%" width="50%" vspace="10" style={displays.centerPic} />

                <div id="popMap" className="modal">
                  <span className="close" onClick="document.getElementById('popMap').style.display='none'">&times;</span>
                  <img className="modal-content" id="img02" style={{maxHeight: '500px;'}}/>
                </div>

              <li> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level: </li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <img id='randrooms' src="../static/portfolio/random-room.png" alt="random rooms" height="45%" width="45%" vspace="10" />

                  <div id="popRandrooms" className="modal">
                    <span className="close" onClick="document.getElementById('popRandrooms').style.display='none'">&times;</span>
                    <img className="modal-content" id="img03" style={{maxWidth: '700px;'}}/>
                  </div>

                  <img id='boss' src="../static/portfolio/boss.png" alt="boss level" height="45%" width="45%" vspace="10" />

                  <div id="popBoss" className="modal">
                    <span className="close" onClick="document.getElementById('popBoss').style.display='none'">&times;</span>
                    <img className="modal-content" id="img04" style={{maxWidth: '700px;'}}/>
                  </div>

                </div>
                <center>
                  <a href='https://www.youtube.com/watch?v=cdlxhQVUIro' target="_blank"> Click here for demo </a>
                </center>
            </ul>
        </div>
        <div className='box'>
          <h3> Personal projects </h3>
            <ul>
              <li> Current projects:
                <ul>
                  <li> Personal website built with React and Next.js, allows playing with graphic design </li>
                  <li> Safety app around Berkeley for students built using Swift </li>
                  <li> Learning graphic design via Photoshop, Illustrator, and Maya </li>
                </ul>
              </li>
              <li> Projected projects:
                <ul>
                  <li> Modifying voice-activated car built last semester to be hooked up to bluetooth and Wi-Fi </li>
                  <li> Original pixel art Gameboy game built from scratch </li>
                  <li> Image analysis to interpret and translate language with NLP using AI/ML </li>
                </ul>
              </li>
            </ul>
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          justify-content: center;
          font-size: 36px;
          margin: 75px 0px;
          text-shadow: 2px 2px black;
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

      `} </style>

    </span>

  )
};
