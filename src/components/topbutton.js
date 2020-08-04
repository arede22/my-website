import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes, imgSrcs } = theme;

// styles and wrappers
const Button = styled.button`
  display: none;
  right: 30px;
  background-color: ${({ lightTheme }) => lightTheme ? colors.palePink : colors.cerulean };
  position: fixed;
  bottom: 20px;
  z-index: 99;
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 30px;
  font-size: ${fontSizes.sm1};
  color: white;

  &:hover {
    background-color: ${({ lightTheme }) => lightTheme ? colors.darkPalePink : colors.darkCerulean };
  }

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }

`;
const ImgStyle = styled.img`
  height: 14px;
  width: 16px;
`;

export default function TopButton({ theme }) {
  const isLight = theme === 'light';

  return (
    <Button id="scrolltop" lightTheme={isLight}>Top <ImgStyle src={imgSrcs.up} /></Button>
  )
};

TopButton.propTypes = {
  theme: string.isRequired
}
