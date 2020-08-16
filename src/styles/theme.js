const theme = {

  lightTheme: {
    body: '#ffffff',
    textColor: '#303030',
    gradient: 'linear-gradient(#d46079, #ffb6c1)',
    hoverGradient: 'linear-gradient(#d46079, #ffb6c1, #d46079)',

    bannerBg: '#d46c83',
    bannerFg: '#007ba7',

    navBg: '#303030',
    navFg: 'white',
    navHg: 'rgba(197, 239, 247, 1)',
    navHomeFg: 'rgba(129, 207, 224, 1)',
    navHomeHg: 'rgba(129, 207, 224, 0.4)',

    background: '/static/genImages/new/light.png',
    backgroundSm: '/static/genImages/new/lightSm.png',
    profilePic: '/static/genImages/new/lightProfPic.png',
    up: '/static/genImages/scroll-up-arrow-light.svg',
  },

  darkTheme : {
    body: '#4a4847',
    textColor: '#ffffff',
    gradient: 'linear-gradient(#091236, #00008B)',
    hoverGradient: 'linear-gradient(#091236, #00008B, #091236)',

    bannerBg: 'white',
    bannerFg: '#f79555',

    navBg: '#303030',
    navFg: 'white',
    navHg: 'rgba(197, 239, 247, 1)',
    navHomeFg: 'rgba(129, 207, 224, 1)',
    navHomeHg: 'rgba(129, 207, 224, 0.4)',

    background: '/static/genImages/new/dark.png',
    backgroundSm: '/static/genImages/new/darkSm.png',
    profilePic: '/static/genImages/new/darkProfPic.png',
    up: '/static/genImages/scroll-up-arrow-dark.svg',
  },

  colors: {

    // cerulean: #007ba7
    // seagreen: #00a780
    // gray-green contrast: #20b286

    // shades/tints of cerulean:
    //    black: #00070a
    //      #00161e, #002431, #003345, #004159, #00506c, #005e80, #006d93, #007ba7, #0089bb, #0098ce, #00a6e2, #00b5f5
    //    periwinkle-dark,light: #a7e8ff, #bbedff

    // tones of cerulean:
    //    gray: #4d575a
    //    #475a60, #405d67, #3a606d, #336374, #2d667a, #276980, #206c87, #1a6f8d, #137294, #0d759a, #0678a1
    //    cerulean: #007ba7

    // check color blindness simulator

    purple: "#9e005d", // unused
    darkPink: "#d4145a", // unused
    pink: "#ed1e79", // unused
    lightPink: "#d46c83", // unused
    palePink: "#dc8079",
    darkPalePink: "#d46079",

    orange: "#f79555",
    darkOrange: '#f4670c', // unused

    cerulean: "#007ba7",
    darkCerulean: "#0d759a",

    periwinkle: "#bbedff", // unused

    transparentSeaBlue: "rgba(129, 207, 224, 0.4)",
    moreSeaBlue: "rgba(197, 239, 247, 0.7)",
    seaBlue: "rgba(129, 207, 224, 1)",
    skyBlue: "rgba(197, 239, 247, 1)",
    darkSkyBlue: "rgba(169, 211, 219, 1)",

    deepSeaBlue: "#002431", // unused
    darkerDeepSeaBlue: "#00070a", // unused

    transparentGray: "rgba(166, 166, 166, 0.3)",
    halfTransparentGray: "rgba(166, 166, 166, 0.5)",
    lightestGray: "#f1f1f1", // unused
    lightGray: "#cfcfcf",
    medGray: "#bbb", // unused
    darkGray: "rgba(74, 72, 71, 1)",

    transparentBlack: "rgba(0,0,0,0.9)", // unused
    black: "#303030",

  },

  fonts: {

    Lucida: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
    Oswald: "'Oswald', sans-serif",

  },

  fontSizes: {

    sm00: '12px',
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
    carRepo: 'https://github.com/arede22/voice-activated-car',
    mlDecalRepo: 'https://github.com/arede22/MLDecal_projects',
    gameVid: 'https://www.youtube.com/watch?v=cdlxhQVUIro'

  },

  iconSrcs: {

    mail: '/static/footer/email',
    ig: '/static/footer/insta',
    linkedin: '/static/footer/linkedin',
    github: '/static/footer/github',
    star: '/static/footer/star.png',
    fork: '/static/footer/fork.png',

  },

  imgSrcs: {

    backgroundLightSm: '/static/genImages/new/lightSm.png',
    backgroundDarkSm: '/static/genImages/new/darkSm.png',
    backgroundLight: '/static/genImages/new/light.png',
    backgroundDark: '/static/genImages/new/dark.png',
    profile: '/static/genImages/profile.png',
    rainbow: '/static/genImages/rainbow.jpg',
    up: '/static/genImages/scroll-up-arrow.svg',
    car: '/static/portfolio/car.png',
    map: '/static/portfolio/map.png',
    randRooms: '/static/portfolio/random-room.png',
    boss: '/static/portfolio/boss.png',
    tree: '/static/portfolio/tree.png',
    treesvg: '/static/portfolio/tree.svg',

  }

};

// export
export default theme;
