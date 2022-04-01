export const navbar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "spring",
    },
  },
};
export const body = {
  initial: {
    y: "30%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.369,
      type: "spring",
      stiffness: 100,
    },
  },
  services: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.369,
      type: "spring",
      stiffness: 50,
    },
  },
};
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
export const roundButtonContainerArrow = {
  animate: {
    x: [4, -4],
    transition: {
      duration: 0.21,
      delay: 0.21,
      yoyo: Infinity,
    },
  },
};
export const infoText = {
  animate: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    delay: 0.21,
  },
};
export const warningSign = {
  animate: {
    scale: [1.2, 1],
    rotate: [1, -1],
    delay: 0.1,
    transition: {
      duration: 0.369,
      yoyo: Infinity,
    },
  },
};
export const checkBox = {
  static: {
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: [-3, 3],
    delay: 0.1,
    transition: {
      duration: 0.369,
      yoyo: Infinity,
    },
  },
  click: {
    scale: 1.2,
    rotate: [-3, 3],
    delay: 0.1,
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
export const warningText = {
  animate: {
    scale: [1.05, 1],
    delay: 0.1,
    transition: {
      duration: 0.369,
      yoyo: Infinity,
    },
  },
};
export const textBox = {
  hover: {
    scale: 1.1,
    delay: 0.21,
    transition: {
      duration: 0.369,
    },
  },
};
export const ctaText = {
  tick: {
    x: [9, -9],
    transition: {
      delay: 1,
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  arrow: {
    x: 4,
    y: -4,
    transition: {
      delay: 1,
      duration: 0.69,
      yoyo: Infinity,
    },
  },
  textHover: {
    scale: 1.1,
  },
  textNormal: {
    scale: 1,
  },
};
export const loveEmojiAnim = {
  animation: {
    scale: [1.05, 1],
    y: [-4, 0],
    rotate: [0, 6],
    transition: {
      duration: 0.369,
      yoyo: Infinity,
    },
  },
};
export const astroApeAnimation = {
  animation: {
    scale: [1.02, 1],
    y: [-4, 0],
    rotate: [0, 6],
    transition: {
      duration: 4.5,
      yoyo: Infinity,
    },
  },
};
export const errorMonsterAnimation = {
  animation: {
    scale: [1.09, 1],
    rotate: [-3, 9],
    y: [-1, 3],
    x: [-108, 96],
    transition: {
      duration: 9,
      yoyo: Infinity,
    },
  },
};
