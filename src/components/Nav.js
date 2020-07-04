import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fontSizes, imgSrcs } = theme;

// styles and wrappers
const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  transition: top 0.2s ease-in-out;
  width: 100%;

  @media (max-width: 600px) {
    position: relative;
  }
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

  @media (max-width: 600px) {
    display: inline-block;
    justify-content: center;
  }
`;
const LIWrapper = styled.li`
  display: flex;
  padding: 6px 8px;
`;
const OptLIWrapper = styled(LIWrapper)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const Link = styled.a`
  text-decoration: none;
  font-size: ${fontSizes.sm2};
  color: white;

  &:hover {
    color: ${colors.moreSeaBlue};
  }

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0}
  }
`;
const HomeLink = styled(Link)`
  color: ${colors.transparentSeaBlue};

  @media (max-width: 600px) {
    &::after {
      content: url(${imgSrcs.dropdown});
    }
  }
`;
const Banner = styled.div`
  background-color: white;
`;
const BannerName = styled.ul`
  margin: 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
`;
const BannerLi = styled.li`
  display: flex;
  padding: 6px 8px;
  color: ${colors.orange};
`;

// export main component
export default function Nav() {
  var prevColor;

  return (
    <NavWrapper id="navbar">
      <Banner>
        <BannerName>
          <BannerLi> A </BannerLi>
          <BannerLi> N </BannerLi>
          <BannerLi> I </BannerLi>
          <BannerLi> K </BannerLi>
          <BannerLi> A </BannerLi>
        </BannerName>
      </Banner>
      <StyledNav>
        <ULWrapper>
          <LIWrapper> <HomeLink href='/' id='home' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}} style={{color: colors.transparentSeaBlue}}> Home </HomeLink> </LIWrapper>
          <OptLIWrapper className="extra"> <Link href="#About" id='about' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> About </Link> </OptLIWrapper>
          <OptLIWrapper className="extra"> <Link href="#Portfolio" id='portfolio' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> Portfolio </Link> </OptLIWrapper>
          <OptLIWrapper className="extra"> <Link href="#Contact-Me" id='contact-me' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> Contact Me </Link> </OptLIWrapper>
          <OptLIWrapper className="extra"> <Link href="resume.pdf" target="_blank"> Resume </Link> </OptLIWrapper>
        </ULWrapper>
      </StyledNav>
    </NavWrapper>
  )
};
