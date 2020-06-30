import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts } = theme;
// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;

// main component
export default function Project() {
  return (
    <div>
      <div class="a" style={{position: "absolute", backgroundColor: "pink", height: "100px", width: "100px"}}>
      </div>
      <div className="b" style={{position: "relative", backgroundColor: "green", height: "100px", width: "100px", left: "25px", top: "20px"}}>
      </div>
    </div>
  )
};
