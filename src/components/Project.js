import React from 'react';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors } = theme;
// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;
const CenterPiece = styled.div`
  position: absolute;
  background-color: pink;
  height: 200px;
  width: 200px;
`;
const SidePiece = styled.div`
  position: relative;
  background-color: green;
  height: 100px;
  width: 100px;
`;

// export main component
export default function Project() {
  return (

    <StyledWrapper>
      <CenterPiece />
      <SidePiece />
    </StyledWrapper>

  )
};
