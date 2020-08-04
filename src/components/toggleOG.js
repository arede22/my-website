import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;

const ThemeButton = styled(Button)`
  left: 30px;
  background-color: ${( props ) => props.theme ? colors.deepSeaBlue : colors.palePink };

  &:hover {
    background-color: ${( props ) => props.theme ? colors.darkerDeepSeaBlue : colors.darkPalePink };
  }

`;
const ToggleContainer = styled.label`
  position: fixed;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 99;
  bottom: 30px;
  left: 30px;
  font-size: ${fontSizes.sm0};
  text-align: center;
  line-height: 2;
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${colors.deepSeaBlue};
  }

  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  &:focus {
    box-shadow: 0 0 1px ${colors.deepSeaBlue};
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.palePink};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:checked {
    background-color: ${colors.deepSeaBlue};
  }

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

export default function ToggleOG() {
  return (
    <ThemeButton id="changeToLight">Theme</ThemeButton>

    <ToggleContainer>
      <Input type="checkbox" id="changeToLight" />
      <Slider></Slider>
      <br/> Theme
    </ToggleContainer>
  )
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
