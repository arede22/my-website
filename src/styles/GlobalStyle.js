import { createGlobalStyle } from 'styled-components';
import media from './media';
import fadeInImg from './fadeInImg';
// styles
import theme from './theme';
const { colors, fonts, imgSrcs, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
  .img-loading {
     opacity: 0;
     width: 100%;
     height: auto;
     margin: 0 auto;

     @media (max-width: 600px) {
       margin: 0 30px;
       max-width: 360px;
     }
   }
  .img-loaded {
     animation: ${fadeInImg} cubic-bezier(0.23, 1, 0.32, 1) 1;
     position: relative;
     opacity: 0;
     animation-fill-mode: forwards;
     animation-duration: 0.7s;
     animation-delay: 0.1s;
     margin: 0 auto;

     @media (max-width: 600px) {
       margin: 0 30px;
       max-width: 360px;
       height: auto;
     }

   }
  body {
    margin: 0;
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    background-size: 100%;
    background-position-y: top;
    background: ${({ theme }) => theme.body} url(${({ theme }) => theme.background}) repeat-y center;
    color: ${({ theme }) => theme.textColor};
    text: ${({ theme }) => theme.textColor};

    @media (max-width: 600px) {
      background: ${({ theme }) => theme.body} url(${({ theme }) => theme.backgroundSm}) repeat-y center;
      max-width: 600px;
    }

    @media ${media.tablet} {
      max-width: 800px;
    }

    @media ${media.laptop} {
      max-width: 1000px;
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
    font-size: ${fontSizes.lg};

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
`;

// export
export default GlobalStyle;
