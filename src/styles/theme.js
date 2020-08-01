// need proper theme colors:
const theme = {
  // need contrasting colors

  // two theme settings: dark and light
  // https://styled-components.com/docs/advanced
  // https://medium.com/@NateBaldwin/theming-with-css-variables-d7acddd3a699
  colors: {

    // cerulean: #007ba7
    // seagreen: #00a780
    // shades/tints of cerulean:
    //    black: #00070a
    //    #00161e
    //    #002431
    //    #003345
    //    #004159
    //    #00506c
    //    #005e80
    //    #006d93
    //    #007ba7
    //    #0089bb
    //    #0098ce
    //    #00a6e2
    //    #00b5f5
    //    periwinkle-dark,light: #a7e8ff, #bbedff

    // tones of cerulean:
    //    gray: #4d575a
    //    #475a60
    //    #405d67
    //    #3a606d
    //    #336374
    //    #2d667a
    //    #276980
    //    #206c87
    //    #1a6f8d
    //    #137294
    //    #0d759a
    //    #0678a1
    //    #007ba7

    // check color blindness simulator

    orange: "#f79555",
    darkOrange: '#f4670c',

    cerulean: "#007ba7",
    darkCerulean: "#0d759a",

    periwinkle: "#bbedff",

    transparentSeaBlue: "rgba(129, 207, 224, 0.4)",
    moreSeaBlue: "rgba(197, 239, 247, 0.7)",
    seaBlue: "rgba(129, 207, 224, 1)",
    skyBlue: "rgba(197, 239, 247, 1)",
    darkSkyBlue: "rgba(169, 211, 219, 1)",

    deepSeaBlue: "#002431",
    darkerDeepSeaBlue: "#00070a",

    transparentGray: "rgba(166, 166, 166, 0.3)",
    halfTransparentGray: "rgba(166, 166, 166, 0.5)",
    lightestGray: "#f1f1f1",
    lightGray: "#cfcfcf",
    medGray: "#bbb",
    darkGray: "rgba(74, 72, 71, 1)",

    transparentBlack: "rgba(0,0,0,0.9)",
    black: "#303030",

  },

  fonts: {

    Lucida: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
    Oswald: "'Oswald', sans-serif",

  },

  fontSizes: {
// best sizes for mobile: sm0-3
    sm0: '14px',
    sm1: '16px',
    sm2: '17px',
    sm3: '18px',
    med1: '36px',
    med2: '40px',
    lg: '48px'

  },

  hrefs: {

    mail: 'mailto:arede22@berkeley.edu',
    ig: 'https://www.instagram.com/berk_eng_doodler/',
    linkedin: 'https://www.linkedin.com/in/anikarede/',
    github: 'https://github.com/arede22',
    webRepo: 'https://github.com/arede22/theanikarede',
    gameVid: 'https://www.youtube.com/watch?v=cdlxhQVUIro'

  },

  iconSrcs: {

    mail: 'static/footer/email',
    ig: 'static/footer/insta',
    linkedin: 'static/footer/linkedin',
    github: 'static/footer/github',
    star: 'static/footer/star.png',
    fork: 'static/footer/fork.png',

  },

  imgSrcs: {

    backgroundLightSm: 'static/genImages/new/lightSm.png',
    backgroundDarkSm: 'static/genImages/new/darkSm.png',
    backgroundLight: 'static/genImages/new/light.png',
    backgroundDark: 'static/genImages/new/dark.png',
    profile: 'static/genImages/profile.png',
    car: 'static/portfolio/car.png',
    map: 'static/portfolio/map.png',
    randRooms: 'static/portfolio/random-room.png',
    boss: 'static/portfolio/boss.png',
    tree: 'static/portfolio/tree.png',
    treesvg: 'static/portfolio/tree.svg',

  }

};

// export
export default theme;
