import React from 'react';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;

  @media (max-width: 600px) {
    display: inline-block;
  }
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  padding: 7.5px 20px 20px;
`;
const Rows = styled.ul`
  display: flex;
  padding: 0 15px;
`;
const Cols = styled(StyledWrapper)`
  flex: 50%;
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
  font-size: ${fontSizes.lg};
`;

// export main component
export default function Softwares() {
  return (
    <Box>
      <h3> Languages/Software Skills </h3>
      <Rows>
        <Cols>
          <li> Kotlin </li>
          <li> JavaScript </li>
          <li> Python </li>
          <li> PyTorch </li>
          <li> C/C++ </li>
          <li> AutoCAD </li>
          <li> COMSOL </li>
          <li> Photoshop </li>
        </Cols>
        <Cols>
          <li> Swift </li>
          <li> HTML/CSS </li>
          <li> Java </li>
          <li> Tensorflow </li>
          <li> React </li>
          <li> MATLAB </li>
          <li> SolidWorks </li>
        </Cols>
      </Rows>
    </Box>
  )
}
