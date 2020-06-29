import React from 'react';
import { theme } from '../styles';
import styled from 'styled-components';
const { colors, fontSizes, fonts, displays } = theme;

const ref = [
  { href: 'mailto:arede22@berkeley.edu', src: '../static/footer/email' },
  { href: 'https://www.instagram.com/berk_eng_doodler/', src: '../static/footer/insta' },
  { href: 'https://www.linkedin.com/in/anikarede/', src: '../static/footer/linkedin' },
  { href: 'https://github.com/arede22', src: '../static/footer/github' }
];

const links = ref.map(link => {
  link.key = `nav-link-${link.href}-${link.src}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
});

const StyledWrapper = styled.div`
  margin: auto;
  align: center;
`;

const FooterStyle = styled.footer`
  width: 80%;
  align: center;
  padding-top: 40px;
  margin: 25px auto;
`;

const ULWrapper = styled.ul`
  background-color: ${colors.transparentGray};
  display: flex;
  justify-content: space-around;
  border-top: 3px solid ${colors.lightGray};
  padding: 10px 25px;
  margin: 0px 15px 10px;
`;

const LIWrapper = styled.li`
  display: flex;
  padding: 10px 15px;
`;

const Button = styled.button`
  color: ${colors.lightGray};
  font-size: ${fontSizes.med};
  font-family: ${fonts.Lucida};
`;

const Link = styled.a`
  text-decoration: none;
`;


function Footer() {
  return (
    <StyledWrapper>
      <FooterStyle>
        <ULWrapper>
          {links.map(({ key, href, src }) => (
            <LIWrapper key={key}>
              <a href={href} target="_blank"> <img src={src + '.png'} onMouseOver={e => {e.currentTarget.src = src + '-hover.png'}} onMouseOut={e => {e.currentTarget.src = src + '.png'}} /> </a>
            </LIWrapper>
          ))}
        </ULWrapper>
        <StyledWrapper>
          <Button>
            <Link href='/' style={{color: 'black'}}>/\ Top </Link>
          </Button>
        </StyledWrapper>
        <StyledWrapper>
          <p style={{color: 'white'}}>
            Made by Anika Rede | <Link target="_blank" href="https://github.com/arede22/my-website" style={{color: colors.skyBlue}}> GitHub </Link>
          </p>
        </StyledWrapper>
      </FooterStyle>

      <style jsx>{`
        p {
          text-align: center;
          font-family: ${fonts.Lucida}
        }
      `}</style>
    </StyledWrapper>
  )
}

export default Footer;
