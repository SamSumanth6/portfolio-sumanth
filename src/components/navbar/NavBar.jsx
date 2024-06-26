import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="https://drive.google.com/file/d/1haeGMN9e8zFPSSwKmaarIQlFBI_sCEl-/view?usp=sharing" target="_blank">
            <img src="./cv.png" alt="resume" />
          </a>
          <a href="https://github.com/SamSumanth6" target="_blank">
            <img src="./github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/sumanthv6/" target="_blank">
            <img src="./linkedin.png" alt="linkedIn" />
          </a>
          <a href="">
            <img src="./phone.png" alt="Contact" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
