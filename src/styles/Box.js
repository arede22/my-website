// general imports
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors } = theme;

const Box = styled.div`
  background-color: ${({ theme }) => theme.boxColor };
  overflow-x: auto;
  padding: 7.5px 20px 20px;
  width: 70%;
  margin: auto;
  margin-bottom: 30px;
`;

export default Box;
