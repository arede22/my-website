import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fonts, imgSrcs, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    color: white;
    background: ${colors.darkGray} url(${imgSrcs.backgroundImg}) repeat-y center;
    background-size: 100%;
    background-position-y: top;

    @media (max-width: 600px) {
      background: ${colors.darkGray} url(${imgSrcs.backgroundImgSm}) repeat-y center;
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
  h1, h2, h3, h4, h5 {
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
    }
  }
  h4 {
    font-size: ${fontSizes.sm3};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm2};
    }
  }
  h5 {
    font-size: ${fontSizes.sm2};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm1};
    }
  }
  p {
    font-size: ${fontSizes.sm1};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm0};
    }
  }
`;

// export
export default GlobalStyle;
