// general imports
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { fontSizes, colors } = theme;

const Link = styled.a`
  text-decoration: none;
  font-size: ${fontSizes.sm1};
  color: ${colors.skyBlue};

  &:hover {
    color: ${colors.darkSkyBlue};
  }
`;

export default Link;
