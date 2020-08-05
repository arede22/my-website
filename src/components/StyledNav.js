import { useState, useEffect } from 'react';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;
// dropdown fix: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar

// styles and wrappers
const NavWrapper = styled.nav`
  text-align: center;
  padding: 10px 0px;
  background-color: ${colors.black};
  width: 100%;
  margin: 0 auto;
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
    color: ${colors.skyBlue};
  }
`;
const HomeLink = styled(Link)`
  color: ${colors.seaBlue};

  @media (max-width: 600px) {
    &:hover::after {
      content: '';
      border: solid ${colors.transparentSeaBlue};
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &::after {
      content: '';
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
`;

// export main component
export default function StyledNav({ theme }) {
  const [color, setColor] = useState(colors.moreSeaBlue);

  const toggleColor = (e) => {
    var tempColor = e.currentTarget.style.color;
    e.currentTarget.style.color = color;
    setColor(tempColor);
  };

  var prevColor;

  const onHoverIn = (e) => {
    prevColor = e.currentTarget.style.color;
    e.currentTarget.style.color = colors.moreSeaBlue;
  };
  const onHoverOut = (e) => {
    e.currentTarget.style.color = prevColor;
  }

  return (
    <NavWrapper>
      <ULWrapper>
        <LIWrapper>
          <HomeLink href='/' id='home' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Home </HomeLink>
        </LIWrapper>
        <OptLIWrapper className="extra">
          <Link href="#Intro" id='intro' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Intro </Link>
        </OptLIWrapper>
        <OptLIWrapper className="extra">
          <Link href="#Portfolio" id='portfolio' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Portfolio </Link>
        </OptLIWrapper>
        <OptLIWrapper className="extra">
          <Link href="#Contact-Me" id='contact-me' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Contact Me </Link>
        </OptLIWrapper>
        {/*<OptLIWrapper className="extra">
          <Link href="/blog" onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Blog </Link>
        </OptLIWrapper>*/}
        <OptLIWrapper className="extra">
          <Link href="resume.pdf" target="_blank" rel="nofollow noopener noreferrer" onMouseOver={e => {e.currentTarget.style.color = colors.moreSeaBlue;}} onMouseOut={e => {e.currentTarget.style.color = 'white'}}> Resume </Link>
        </OptLIWrapper>
      </ULWrapper>
    </NavWrapper>
  )
};
