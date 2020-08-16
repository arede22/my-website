// general imports
import styled from 'styled-components';
// styles
import { theme, ResumeBox, WelcomeStyle } from '@styles';
const { fontSizes } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 160px auto;
  text-align: center;
`;
const PStyle = styled.p`
  line-height: 1.5;
  font-size: ${fontSizes.sm1};
  text-shadow: black 1px 1px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }
`;

// export main component
export default function Welcome({ theme }) {
  const prod = process.env.NODE_ENV === 'production';

  return (
    <StyledWrapper>
      <h1>Hi, I'm Anika Rede.</h1>
      {!!prod &&
        <PStyle>My website looks a lil jank but I'm always tinkering with new things!</PStyle>
      }
      <img src={theme.profilePic} alt="This is me!" />

      <WelcomeStyle>
        <PStyle>
          Allow me to introduce myself!
          <br /> I started out my CS career a couple years ago and almost immediately found my passion in the field: natural language processing.
          <br /> However, I want to acquaint myself with software engineering and AI/ML as a bridge before delving into NLP.
          <br /> Currently, I am looking for an internship that can give me some experience in SWE, NLP, or animation.
        </PStyle>
        <ResumeBox />
      </WelcomeStyle>
    </StyledWrapper>
  )
};

// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.
//   const res = await fetch('https://api.github.com/repos/arede22/theanikarede');
//   const json = await res.json();
//
//   return {
//     props: {
//       json,
//     },
//     // revalidate: 1
//   }
// }
