// general imports
import { createGlobalStyle } from 'styled-components';
import media from '../media';
import fadeInImg from '../fadeInImg';
// styles
import theme from '../theme';
import colors from '../colors';
const { fonts, imgSrcs, fontSizes } = theme;

// .img-loading and .img-loaded don't mess with semicolons
const GlobalStyle = createGlobalStyle`
  .img-loading {
     opacity: 0
     width: 100%
     height: auto
     margin: 0 auto

     @media (max-width: 600px) {
       margin: 0 30px;
       max-width: 360px;
     }
  } .img-loaded {
    animation: ${fadeInImg} ease 10s;
    -webkit-animation: ${fadeInImg} ease 10s;
    -moz-animation: ${fadeInImg} ease 10s;
    -o-animation: ${fadeInImg} ease 10s;
    -ms-animation: ${fadeInImg} ease 10s;
     position: relative
     opacity: 0
     z-index: -1;
     animation-fill-mode: forwards
     animation-duration: 0.7s
     animation-delay: 0.1s
     margin: 0 auto;

     @media (max-width: 600px) {
       margin: 0 30px;
       max-width: 360px;
       height: auto;
     }
   }
   html, body {
    margin: 0;
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    background-size: 100%;
    background: ${({ theme }) => theme.body} url(${({ theme }) => theme.background}) repeat-y center;
    background-position-y: top;
    color: ${({ theme }) => theme.textColor};

    @media (max-width: 600px) {
      background: ${({ theme }) => theme.body} url(${({ theme }) => theme.backgroundSm}) repeat-y center;
      max-width: 550px;
    }

    @media ${media.tablet} {
      max-width: 700px;
    }

    @media ${media.laptop} {
      max-width: 950px;
    }

    @media ${media.laptopL} {
      max-width: 1200px;
    }

    @media ${media.desktop} {
      max-width: 1400px;
    }

  }
  h1, h2, h3, h4 {
   font-family: ${fonts.Oswald};
   text-transform: uppercase;
   text-shadow: black 2px 2px;
  }
  h1 {
    background-color: ${({ theme }) => theme.h1bg };
    width: 50%;
    border-radius: 12px;
    text-align: center;
    font-size: ${fontSizes.lg};
    padding: 20px 10px;
    margin: 30px auto;

    &::selection {
      background-color: ${({ theme }) => theme.h1selectbg };
      color: ${({ theme }) => theme.h1selectfg };
    }

    @media (max-width: 600px) {
      font-size: ${fontSizes.med2};
    }
  }
  h2 {
    font-size: ${fontSizes.med2};

    @media (max-width: 600px) {
      font-size: ${fontSizes.med1};
    }
  }
  h3 {
    font-size: ${fontSizes.med1};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm3};
      text-shadow: black 1px 1px;
    }
  }
  h4 {
    font-size: ${fontSizes.sm3};
    text-shadow: black 1px 1px;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm2};
    }
  }
  h5 {
    font-size: ${fontSizes.sm2};
    text-shadow: black 1px 1px;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm1};
    }
  }
  p {
    font-size: ${fontSizes.sm1};
    text-shadow: black .5px .5px;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
    line-height: 1.5;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm0};
    }
  }
  ul {
    color: ${({ theme }) => theme.textColor};
  }
  li {
    text-shadow: black .5px .5px;
    color: ${({ theme }) => theme.textColor};
  }
  a {
    text-decoration: none;
    font-size: ${fontSizes.sm1};
    color: ${colors.skyBlue};

    &:hover {
      color: ${colors.darkSkyBlue};
    }
  }
`;

// export
export default GlobalStyle;