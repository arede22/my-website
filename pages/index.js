import React from 'react';
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '../src/components';
import { theme } from '../src/styles';
const { colors, fonts, fontSizes, displays } = theme;
// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const StyledWrapper = styled.div`
  background: ${colors.darkGray} url('../static/starting-background.png') no-repeat center;
  background-size: 100% 100%;
  overflow: auto;
`;

// main component
const Home = () => (
  <StyledWrapper>
    <Header />

    <Nav />

    <Welcome />
    <Intro />
    <Portfolio />
    <ContactMe />

    <Footer />

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: ${fonts.Lucida};
        background-color: ${colors.bodyBackground};
        padding-top: 60px;
      }
      .nav-up {
        top: -60px;
      }
      .button {
        width: auto;
        border: 1px solid white;
        border-radius: 6px;
        padding: 10px;
        margin-bottom: 10px;
      }
      ul {
        color: white;
        font-family: ${fonts.Lucida};
      }
      li {
        color: white;
        font-family: ${fonts.Lucida};
        margin: 5px 0px;
      }
      h1 {
        color: white;
        font-family: ${fonts.Lucida};
      }
      h2 {
        color: white;
        font-family: ${fonts.Lucida};
      }
      h3 {
        color: white;
        font-family: ${fonts.Lucida};
      }
      p {
        color: white;
        font-family: ${fonts.Lucida};
      }
      a {
        color: white;
        font-family: ${fonts.Lucida};
        text-decoration: none;
      }
      a:hover {
        color: ${colors.skyBlue};
      }
    `}</style>

  </StyledWrapper>
);

// export
export default Home;
