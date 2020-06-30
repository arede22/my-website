import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts } = theme;

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
  padding: 4px 16px;
`;
const LIWrapper = styled.li`
  display: flex;
  padding: 6px 8px;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 17px;
  font-family: ${fonts.Lucida};

  &:hover {
    color: ${colors.seaBlue};

  }
`;

// export main component
export default function Nav() {
  return (
    <NavWrapper id="navbar">
      <StyledNav>
        <ULWrapper>
          <LIWrapper> <Link href='/'> Home </Link> </LIWrapper>
          <LIWrapper> <Link href="#About"> About </Link> </LIWrapper>
          <LIWrapper> <Link href="#Portfolio"> Portfolio </Link> </LIWrapper>
          <LIWrapper> <Link href="#Contact-Me"> Contact Me </Link> </LIWrapper>
          <LIWrapper> <Link href="resume.pdf" target="_blank"> Resume </Link> </LIWrapper>
        </ULWrapper>
      </StyledNav>
    </NavWrapper>
  )
};
