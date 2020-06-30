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
const ImgWrapper = styled.a`
  display: block;
  margin: 0 auto;
`;
const ImgStyle = styled.img`
  /* display: block;
  margin: 0 auto; */
  height: 50%;
  width: 50%;
  max-width: 300px;
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

  &:hover,&:focus {
    color: ${colors.medGray};
    text-decoration: none;
    cursor: pointer;
  },

`;

// export main component
export default function Modal(props) {
  // state
  const [popUp, setPopUp] = useState(
    false
  );

  return (
    <StyledWrapper>
      {/*<a onClick={() => setPopUp(!popUp)}> <ImgStyle id={props.trigger} src={props.img} alt={props.trigger} height="50%" width="50%" vspace="10" /> </a>*/}

      {/*popUp &&
        <div style={{backgroundColor: 'pink', height: '30px', width: '30px'}}> </div>
      */}

      <ImgWrapper> <ImgStyle id={props.trigger} src={props.img} alt={props.trigger} vspace="10" /> </ImgWrapper>

      <ModalStyle id={props.pop} className="modal">
        <CloseHandler id="close">&times;</CloseHandler>
        <ContentStyle className="modal-content" id="img01" alt="modal" />
      </ModalStyle>

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
