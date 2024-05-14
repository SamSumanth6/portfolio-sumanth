import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SUMANTH</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Developer <br />
            and UI designer
          </motion.h1>
          <motion.div className="buttons">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants} className="contact-btn">
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            src="./scroll.png"
            alt="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextCointainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer MERN Developer
      </motion.div>
      <div className="imageContainer">
        <img src="./heroimg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
