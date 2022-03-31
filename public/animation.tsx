export const workDesignContainer = {
  static: {
    rotate: 0,
  },
  hover: {
    rotate: -3,
    scale: 1.1,
    transition: {
      duration: 0.369,
      yoyo: Infinity,
    },
  },
  click: {
    scale: 1.2,
    rotate: [-3, 3],
    transition: {
      duration: 0.09,
      yoyo: Infinity,
    },
  },
  textActive: {
    scale: 1.1,
    rotate: [-2, 2, 0],
    transition: {
      delay: 0.369,
      duration: 0.21,
      yoyo: 2,
    },
  },
  textNormal: {
    rotate: 0,
  },
};
export const workDevContainer = {
  static: {
    rotate: 0,
  },
  hover: {
    rotate: 3,
    scale: 1.1,
    transition: {
      duration: 0.369,
      yoyo: Infinity,
    },
  },
  click: {
    scale: 1.2,
    rotate: [-3, 3],
    transition: {
      duration: 0.09,
      yoyo: Infinity,
    },
  },
  textActive: {
    scale: 1.1,
    rotate: [-2, 2, 0],
    transition: {
      delay: 0.369,
      duration: 0.21,
      yoyo: 2,
    },
  },
  textNormal: {
    rotate: 0,
  },
};
export const astronautContainer = {
  animation: {
    //  x: [-2, 0, 1],
    y: [6, -4],
    rotate: [0, 60, 90, 120, 180, 360],
    //  scale: 1.1,
    transition: {
      duration: 6,
      yoyo: Infinity,
    },
  },
};
export const navbarAstronautContainer = {
  animation: {
    x: [200, -200, 150],
    y: [100, 300, -400],
    rotate: [0, -30, -60, -120, -180],
    //  scale: 1.1,
    transition: {
      duration: 18,
      yoyo: Infinity,
    },
  },
};
export const hamburgerContainer = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.369,
      yoyo: Infinity,
    },
  },
  click: {
    rotate: [9, -6],
    transition: {
      duration: 0.9,
      yoyo: Infinity,
    },
  },
  normal: {
    rotate: 0,
  },
};
export const navLinkContainer = {
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  click: {
    scale: 1.2,
  },
};
