import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts, fontSizes } = theme;
// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
  font-family: ${fonts.Oswald};
`;
const ULWrapper = styled.ul`
  color: ${colors.transparentSeaBlue};
`;
const LIWrapper = styled.li`
  color: ${colors.lightGray};
  line-height: 1.5;
`;
const H3Style = styled.h3`
  font-size: ${fontSizes.lg};
`;

// design as timeline (vertical; med-thick w/ stops; ul-clickable and hover-info)

// export main component
export default function WorkExperience() {
  return (
    <StyledWrapper>
      <H3Style> Past work experience </H3Style>
      <ULWrapper>
        <LIWrapper> (Computational Linguistics) Research Intern @ICSI (International Computer Science Institute) -- UC-Berkeley, Jan 2020 -- Current
          <ULWrapper>
            <LIWrapper> Predicting the semantic components from morphologically complex words in polysynthetic languages of Karuk and Yurok </LIWrapper>
          </ULWrapper>
        </LIWrapper>
        <LIWrapper> Software Engineering Intern @Pulse Q&A -- SF, Summer 2019
          <ULWrapper>
            <LIWrapper> Limited personnel previously led to outsourcing manual labor </LIWrapper>
            <LIWrapper> Automated internal tools improved efficiency of office (allowed focus on increasing traffic on the service's platform, marketing efforts, and bettering market-fit) </LIWrapper>
          </ULWrapper>
        </LIWrapper>
        <LIWrapper> (EECS) Research Intern @Jadoo Tech -- UC-Berkeley, Feb-Sept 2019
          <ULWrapper>
            <LIWrapper> Conducted research in physics theoretical equations and experiments for start-up in UC-Berkeley </LIWrapper>
          </ULWrapper>
        </LIWrapper>
        <LIWrapper> (EECS) Research Intern @Feng Labs -- CWRU, 2015-2018
          <ULWrapper>
            <LIWrapper> Quantified properties of metastatic breast cancer cells using MEMS microsensors </LIWrapper>
          </ULWrapper>
        </LIWrapper>
        <LIWrapper> IT Hub Intern @Hathaway Brown -- OH, 2015-2018
          <ULWrapper>
            <LIWrapper> Both worked and volunteered at high-school's IT Helpdesk </LIWrapper>
          </ULWrapper>
        </LIWrapper>
      </ULWrapper>
    </StyledWrapper>
  )
};
