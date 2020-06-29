import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

const Welcome = () => (
  <span className="intro">
     <center>
       <h1 className='welcome-title'>Hi, I'm Anika Rede.</h1>
     </center>
     <img src="../static/profile.png" alt="This is me!" style={{marginLeft: '41%'}}/>

     <div className='welcome-body'>
       <p>I am a sophomore in UC Berkeley studying Electrical Engineering and Computer Science (EECS)
       <br /> concentrating in AI & ML with Linguistics as my minor.
       <br /> My areas of interest lie in ML, NLP, and Cloud Computing. </p>
       <center>
         <div className="resume-box">
           <p> Take a quick peek at my resumé! </p>
           <a className='button' href="resume.pdf" target="_blank"> Resumé </a>
         </div>
       </center>
     </div>
   </span>
);

export default Welcome;
