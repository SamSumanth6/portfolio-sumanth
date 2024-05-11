import React from "react";
import './skills.scss'

const Skills = () => {
  return (
    <div className="skillContainer">
      <div className="skills">
        <div className="imgContainer">
          <img src="./reactjs.png" alt="" />
          <p>React JS</p>
        </div>
        <div className="imgContainer">
          <img src="./html.png" alt="" />
          <p>HTML</p>
        </div>
        <div className="imgContainer">
          <img src="./css.png" alt="" />
          <p>CSS</p>
        </div>
        <div className="imgContainer">
          <img src="./js.png" alt="" />
          <p>JavaScript</p>
        </div>
        <div className="imgContainer">
          <img src="./bootstrap.png" alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="imgContainer">
          <img src="./tailwind.png" alt="" />
          <p>Tailwind CSS</p>
        </div>
        <div className="imgContainer">
          <img src="./sass.png" alt="" />
          <p>SASS</p>
        </div>
        <div className="imgContainer">
          <img src="./restapi.png" alt="" />
          <p>REST Api</p>
        </div>
        <div className="imgContainer">
          <img src="./nodejs.png" alt="" />
          <p>Node JS</p>
        </div>
        <div className="imgContainer" >
          <img src="./expressjs.png" alt=""  className="express"/>
          <p>Express JS</p>
        </div>
        <div className="imgContainer ">
          <img src="./mongodb.png" alt=""  className="mongodb"/>
          <p>MongoDB</p>
        </div>
        <div className="imgContainer">
          <img src="./git.png" alt="" />
          <p>Git</p>
        </div>
        <div className="imgContainer">
          <img src="./linux.png" alt="" />
          <p>Linux</p>
        </div>
        <div className="imgContainer">
          <img src="./postman.png" alt="" />
          <p>Postman</p>
        </div>
        <div className="imgContainer">
          <img src="./figma.png" alt="" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
