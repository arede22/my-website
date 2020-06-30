import React from 'react';
import { theme } from '../styles';
import styled from 'styled-components';
const { colors, fontSizes, fonts, displays } = theme;

// script?
function handleClick(pop) {
  document.getElementById(pop).style.display='none';
};

// export main component
export default function Modal({ props }) {
  return (
    <div>
      <img id={this.props.trigger} src={this.props.img} alt={this.props.trigger} height="50%" width="50%" vspace="10" style={displays.centerPic} />

      <div id={this.props.pop} className="modal">
        <span className="close" onClick="handleClick({this.props.pop})">&times;</span>
        <img className="modal-content" id={this.props.content} style={{maxHeight: '500px;'}}/>
      </div>
    </div>
  )
};
