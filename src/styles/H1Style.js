import styled from 'styled-components';
// styles
import theme from './theme';
const { colors, fontSizes } = theme;

const H1Style = styled.h1`
  background-color: ${colors.transparentSeaBlue};
  width: 50%;
  border-radius: 12px;
  text-align: center;
  font-size: ${fontSizes.med2};
  padding: 20px 10px;
  margin: 30px auto;

  &::selection {
    background-color: ${colors.skyBlue};
    color: ${colors.darkGray};
  }
`;

export default H1Style;
