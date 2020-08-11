import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors } = theme;

const Button = styled.button`
  background-color: ${colors.halfTransparentGray};
  overflow-x: auto;
  padding: 7.5px 20px 20px;
  width: 70%;
  margin: auto;
  margin-bottom: 30px;
`;

export default Button;
