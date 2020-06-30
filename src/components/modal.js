import React from 'react';
import { theme } from '../styles';
import styled, { keyframes } from 'styled-components';
const { colors, fonts } = theme;
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
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9);
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
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  },
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

`;

// script?
function handleClick(pop) {
  document.getElementById(pop).style.display='none';
};

// export main component
export default function Modal({ props }) {
  return (
    <StyledWrapper>
      <ImgStyle id={this.props.trigger} src={this.props.img} alt={this.props.trigger} height="50%" width="50%" vspace="10" />

      <ModalStyle id={this.props.pop}>
        <CloseHandler onClick={ handleClick({this.props.pop}) }>&times;</CloseHandler>
        <ContentStyle id={this.props.content} />
      </ModalStyle>
    </StyledWrapper>
  )
};
