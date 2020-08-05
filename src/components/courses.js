import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;

// styles and wrappers
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  padding: 7.5px 20px 20px;
`;
const ULWrapper = styled.ul`
  color: ${colors.transparentSeaBlue};
  padding: 0 40px;
`;
const LIWrapper = styled.li`
  color: ${colors.lightGray};
  line-height: 1.5;
`;
const H3Style = styled.h3`
  font-size: ${fontSizes.sm3};
`;

// export main component
export default function Courses() {
  return (
    <Box>
      <h3> Major Coursework </h3>
      <ul>
        <li> Intro to Computer Science </li>
        <li> Data Structures & Algorithms </li>
        <li> Discrete Mathematics and Probability Theory </li>
        <li> Probability and Random Processes </li>
        <li> Optimization Models in Engineering </li>
        <li> (Audited) Natural Language Processing </li>
        <li> Computer Architecture </li>
        <li> Designing Information Devices and Systems </li>
      </ul>
      <h3> Minor Coursework </h3>
      <ul>
        <li> Intro to Linguistics </li>
        <li> Intro to Syntax and Semantics </li>
      </ul>
    </Box>
  )
}
