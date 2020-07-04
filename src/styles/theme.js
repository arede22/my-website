// theme colors, font sizes, hrefs, icon srcs, and img srcs used throughout project

// need proper theme colors:
const theme = {

  colors: {

    orange: "#f79555",

    transparentSeaBlue: "rgba(129, 207, 224, 0.4)", // active navbar tab
    moreSeaBlue: "rgba(197, 239, 247, 0.7)", // hover-over navbar
    seaBlue: "rgb(129, 207, 224)",
    skyBlue: "rgb(197, 239, 247)", // hover-over link

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
    Oswald: "'Oswald', sans-serif"

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
    webRepo: 'https://github.com/arede22/my-website',
    gameVid: 'https://www.youtube.com/watch?v=cdlxhQVUIro'

  },

  iconSrcs: {

    mail: '../static/footer/email',
    ig: '../static/footer/insta',
    linkedin: '../static/footer/linkedin',
    github: '../static/footer/github'

  },

  imgSrcs: {

    backgroundImg: '../static/genImages/starting-background.png',
    profile: '../static/genImages/profile.png',
    dropdown: '../../static/genImages/downarrow.svg',
    car: '../static/portfolio/car.png',
    map: '../static/portfolio/map.png',
    randRooms: '../static/portfolio/random-room.png',
    boss: '../static/portfolio/boss.png',

  }

};

// export
export default theme;
