import React,{useEffect}from "react";
import "./skills.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, delayChildren: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="skillContainer" ref={ref}>
      <motion.div
        className="skills"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./reactjs.png" alt="" />
          <p>React JS</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./html.png" alt="" />
          <p>HTML</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./css.png" alt="" />
          <p>CSS</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./js.png" alt="" />
          <p>JavaScript</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./bootstrap.png" alt="" />
          <p>Bootstrap</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./tailwind.png" alt="" />
          <p>Tailwind CSS</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./sass.png" alt="" />
          <p>SASS</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./restapi.png" alt="" />
          <p>REST Api</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./nodejs.png" alt="" />
          <p>Node JS</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./expressjs.png" alt="" className="express" />
          <p>Express JS</p>
        </motion.div>
        <motion.div className="imgContainer mongodb" variants={itemVariants}>
          <img src="./mongodb.png" alt="" className="mongodb" />
          <p>MongoDB</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./git.png" alt="" />
          <p>Git</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./linux.png" alt="" />
          <p>Linux</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./postman.png" alt="" />
          <p>Postman</p>
        </motion.div>
        <motion.div className="imgContainer" variants={itemVariants}>
          <img src="./figma.png" alt="" />
          <p>Figma</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
