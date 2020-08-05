import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, hrefs, fontSizes, iconSrcs } = theme;
// stackoverflow, hackerrank, spotify
// CALHACKS
// dailycal

// constants
const ref = [
  { href: hrefs.mail, src: iconSrcs.mail },
  { href: hrefs.ig, src: iconSrcs.ig },
  { href: hrefs.linkedin, src: iconSrcs.linkedin },
  { href: hrefs.github, src: iconSrcs.github }
];
const links = ref.map(link => {
  link.key = `nav-link-${link.href}-${link.src}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
});

// styles and wrappers
const StyledWrapper = styled.div`
  margin: auto;
  align: center;
  display: flex;
  justify-content: center;
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
  margin: 10px 15px;
  margin-top: 0;
`;
const LIWrapper = styled.li`
  display: flex;
  padding: 10px 15px;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${colors.skyBlue};

  &:hover {
    color: ${colors.darkSkyBlue};
  }
`;
const PStyle = styled.p`
  text-align: center;
`;
const ImgStyle = styled.img`
  margin: 0 auto;

  @media (max-width: 600px) {
    height: 16px;
    width: 16px;
  }
`;
const GithubWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const GithubLink = styled.a`
  text-decoration: none;
  font-size: ${fontSizes.sm1};
  color: ${colors.skyBlue};
`;
const StyledGitHubInfo = styled.div`
  color: black;
  text-align: center;
  margin: auto;
`;
const Icon = styled.img`
  height: 24px;
  width: auto;
`;

// export main component
export default function Footer({ theme }) {
  // taken from bchiang7/v4
  const [githubInfo, setGitHubInfo] = useState({
    stars: 0,
    forks: 0,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/arede22/theanikarede')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <StyledWrapper>
      <FooterStyle>
        <ULWrapper>
          {links.map(({ key, href, src }) => (
            <LIWrapper key={key}>
              <a href={href} target="_blank" rel="nofollow noopener noreferrer"> <ImgStyle loading="lazy" src={src + '.png'} alt={src.replace('static/footer/', "Anika's ")} onMouseOver={e => {e.currentTarget.src = src + '-hover.png'}} onMouseOut={e => {e.currentTarget.src = src + '.png'}} /> </a>
            </LIWrapper>
          ))}
        </ULWrapper>
        {!!githubInfo.stars && !!githubInfo.forks &&
          <GithubWrapper>
            <GithubLink href={hrefs.webRepo} target="_blank" rel="nofollow noopener noreferrer">
              <div> Bye! </div>
              <StyledGitHubInfo>
                <span>
                  <Icon src={iconSrcs.star} alt="Stars: "/>
                  <span>{githubInfo.stars.toLocaleString()}</span>
                </span>
                <span>
                  <Icon src={iconSrcs.fork} alt="Forks: " />
                  <span>{githubInfo.forks.toLocaleString()}</span>
                </span>
              </StyledGitHubInfo>
            </GithubLink>
          </GithubWrapper>
        }
        <StyledWrapper>
          <PStyle>
            Made by Anika Rede | <Link target="_blank" href={hrefs.webRepo} rel="nofollow noopener noreferrer"> GitHub </Link>
          </PStyle>
        </StyledWrapper>
      </FooterStyle>
    </StyledWrapper>
  )
};

// Footer.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/arede22/theanikarede')
//   const json = await res.json()
//   console.log(json.stargazers_count + ', ' + json.forks_count)
//   return { starCount: json.stargazers_count,  forkCount: json.forks_count }
// }
