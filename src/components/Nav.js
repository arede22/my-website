import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;
// component did mount for if state or lifecycle required
// function if not (faster in general)

// styles and wrappers
const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  transition: top 0.2s ease-in-out;
  width: 100%;
`;
const StyledNav = styled.nav`
  text-align: center;
  padding: 10px 0px;
  background-color: ${colors.black};
`;
const ULWrapper = styled.ul`
  margin: 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
`;
const LIWrapper = styled.li`
  display: flex;
  padding: 6px 8px;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 17px;
`;

// export main component
export default function Nav() {
  return (
    <NavWrapper className="nav-down">
      <StyledNav>
        <ULWrapper>
          <LIWrapper> <Link href='/'>Home</Link> </LIWrapper>
          <LIWrapper> <Link href="#About">About</Link> </LIWrapper>
          <LIWrapper> <Link href="#Portfolio">Portfolio</Link> </LIWrapper>
          <LIWrapper> <Link href="#Contact-Me">Contact Me</Link> </LIWrapper>
          <LIWrapper> <Link href="resume.pdf" target="_blank"> Resume </Link> </LIWrapper>
        </ULWrapper>
      </StyledNav>

      <style jsx>{`
        nav > ul {
          padding: 4px 16px;
        }
        a:hover {
          color: rgba(129, 207, 224, 1);
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
        body {
          padding-top: 60px;
        }
      `}</style>
    </NavWrapper>
  )
};
