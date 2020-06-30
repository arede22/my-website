import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;

// export main component
export default function Welcome() {
  return (
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

       <style jsx>{`
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
