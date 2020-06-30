// taken from theme, may use this instead for imports, info from Medium

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}
//
// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}
//
// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}
//
// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}
//
// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}


// @media only screen and (orientation: landscape) {
//   body {
//     background-color: lightblue;
//   }
// }

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const media = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

// export
export default media;
