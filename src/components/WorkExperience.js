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

// export main component
export default function WorkExperience() {
  return (
    <StyledWrapper>
      <p> hi </p>
    </StyledWrapper>
  )
};
