import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

//Coursework
//Skills
//Softwares and comfortability
//Currently exploring pet projects

const Portfolio = () => (

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
  </span>

);

export default Portfolio;
