import React, { useState } from 'react';
import { theme } from '../styles';
import styled, { keyframes } from 'styled-components';
const { colors, fonts, fontSizes } = theme;
// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const zoom = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;
const StyledWrapper = styled.div`
  margin: 0;
`;
const ImgStyle = styled.img`
  display: block;
  margin: 0 auto;
`;
const ModalStyle = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${colors.transparentBlack};
`;
const ContentStyle = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  -webkit-animation-name: ${zoom};
  -webkit-animation-duration: 0.6s;
  animation-name: ${zoom};
  animation-duration: 0.6s;
  max-height: 500px;
  @media only screen and (max-width: 700px){
    width: 100%;
  };
`;
const CloseHandler = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: ${colors.lightestGray};
  font-size: ${fontSizes.med2};
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: ${colors.medGray};
    text-decoration: none;
    cursor: pointer;
  },
  &:focus {
    color: ${colors.medGray};
    text-decoration: none;
    cursor: pointer;
  }

`;

// export main component
export default function Modal(props) {
  // state
  const [popUp, setPopUp] = useState(
    false
  );

  return (
    <StyledWrapper>
      <a onClick={() => setPopUp(!popUp)}> <ImgStyle id={props.trigger} src={props.img} alt={props.trigger} height="50%" width="50%" vspace="10" /> </a>

      {popUp &&
        <ModalStyle id={props.pop}>
          <CloseHandler onClick={ handleClick(props.pop) }>&times;</CloseHandler>
          <ContentStyle id={props.content} />
        </ModalStyle>
      }
      {/*
        Filler
      <div style={{backgroundColor: 'pink', height: '30px', width: '30px'}}> </div>

        Content
      <ModalStyle id={props.pop}>
        <CloseHandler onClick={ handleClick(props.pop) }>&times;</CloseHandler>
        <ContentStyle id={props.content} />
      </ModalStyle>
      */}
    </StyledWrapper>
  )
};
