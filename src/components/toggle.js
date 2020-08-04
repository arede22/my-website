import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;

// styles and wrappers
const ToggleContainer = styled.button`
  border-radius: 34px;
  cursor: pointer;
  padding: 0.5rem;
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ lightTheme }) => lightTheme ? 'black' : 'white'};
  position: fixed;
  display: inline-block;
  width: 80px;
  height: 40px;
  z-index: 99;
  bottom: 30px;
  left: 30px;
  font-size: ${fontSizes.sm0};
  text-align: center;
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
