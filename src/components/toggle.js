import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

// styles and wrappers
const ToggleContainer = styled.button`
  position: fixed;
  display: inline-block;
  z-index: 99;
  bottom: 20px;
  left: 30px;
  border-radius: 34px;
  cursor: pointer;
  padding: 15px;
  background: ${({ theme }) => theme.gradient};
  border: none;
  outline: none;
  color: ${({ lightTheme }) => lightTheme ? 'black' : 'white'};
  font-size: ${fontSizes.sm1};
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.hoverGradient};
  }

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }
`;

export default function Toggle({ theme, toggleTheme }) {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>Theme</ToggleContainer>
  )
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
