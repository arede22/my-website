// taken from theme, may use this instead for imports, info from Medium, Stackoverflow (past styled-components docs)
// customize for different screens, portrait and landscape
// general imports
import { css } from 'styled-components';

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// export
export default media;
