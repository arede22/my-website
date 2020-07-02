import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts, fontSizes } = theme;

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
  font-size: ${fontSizes.sm2};
  font-family: ${fonts.Lucida};

  &:hover {
    color: ${colors.moreSeaBlue};
  },
`;

// export main component
export default function Nav() {
  var prevColor;

  return (
    <NavWrapper id="navbar">
      <StyledNav>
        <ULWrapper>
          <LIWrapper> <Link href='/' id='home' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> Home </Link> </LIWrapper>
          <LIWrapper className="extra"> <Link href="#About" id='about' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> About </Link> </LIWrapper>
          <LIWrapper className="extra"> <Link href="#Portfolio" id='portfolio' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> Portfolio </Link> </LIWrapper>
          <LIWrapper className="extra"> <Link href="#Contact-Me" id='contact-me' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> Contact Me </Link> </LIWrapper>
          <LIWrapper className="extra"> <Link href="resume.pdf" target="_blank"> Resume </Link> </LIWrapper>
        </ULWrapper>
      </StyledNav>

      <style jsx>{`

        @media only screen and (max-width: 600px) {
          li.extra {
            display: none;
          }
        }

      `}
      </style>

    </NavWrapper>
  )
};
