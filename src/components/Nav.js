import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

// component did mount for if state or lifecycle required
// function if not (faster in general)

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

const Nav = () => (
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
    `}</style>
  </NavWrapper>
);

export default Nav;
