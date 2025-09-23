export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const hoverLift = {
  whileHover: { y: -8 },
  whileTap: { scale: 0.98 }
};

export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const rotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideInFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const bounce = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const wiggle = {
  animate: {
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const glow = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(74, 124, 89, 0.3)',
      '0 0 40px rgba(74, 124, 89, 0.6)',
      '0 0 20px rgba(74, 124, 89, 0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const typewriter = {
  animate: {
    width: ['0%', '100%'],
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

export const morphing = {
  animate: {
    borderRadius: ['50%', '20%', '50%'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const elastic = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const shake = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

export const flip = {
  animate: {
    rotateY: [0, 180, 360],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const zoomIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const zoomOut = {
  initial: { opacity: 0, scale: 1.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
};
