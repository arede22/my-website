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
  margin-bottom: 66px;

  @media (max-width: 600px) {
    position: relative;
  }
`;
const StyledNav = styled.nav`
  text-align: center;
  padding: 10px 0px;
  background-color: ${colors.black};

  @media (max-width: 600px) {
    position: relative;
  }
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
  font-size: ${fontSizes.sm3};
  color: white;

  &:hover {
    color: ${colors.moreSeaBlue};
  }
`;
const HomeLink = styled(Link)`
  color: ${colors.seaBlue};

  @media (max-width: 600px) {
    &::after {
      content: '';
      border: solid gray;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
`;
const Banner = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 100%;
`;
const BannerName = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0;
  padding: 0 40px;
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
    <NavWrapper>
      <Banner>
        <BannerName>
          <BannerLi> A </BannerLi>
          <BannerLi> N </BannerLi>
          <BannerLi> I </BannerLi>
          <BannerLi> K </BannerLi>
          <BannerLi> A </BannerLi>
        </BannerName>
      </Banner>
      <StyledNav id="navbar">
        <ULWrapper>
          <LIWrapper> <HomeLink href='/' id='home' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}} style={{color: colors.transparentSeaBlue}}> Home </HomeLink> </LIWrapper>
          <OptLIWrapper className="extra"> <Link href="#About" id='about' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> About </Link> </OptLIWrapper>
          <OptLIWrapper className="extra"> <Link href="#Portfolio" id='portfolio' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> Portfolio </Link> </OptLIWrapper>
          <OptLIWrapper className="extra"> <Link href="#Contact-Me" id='contact-me' onMouseOver={e => {prevColor = e.currentTarget.style.color; e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = prevColor}}> Contact Me </Link> </OptLIWrapper>
          <OptLIWrapper className="extra"> <Link href="resume.pdf" target="_blank"> Resume </Link> </OptLIWrapper>
        </ULWrapper>
      </StyledNav>
      {/*<Banner>
        <BannerName name="anika">
          <BannerLi> A </BannerLi>
          <BannerLi> N </BannerLi>
          <BannerLi> I </BannerLi>
          <BannerLi> K </BannerLi>
          <BannerLi> A </BannerLi>
        </BannerName>
      </Banner>*/}
    </NavWrapper>
  )
};
