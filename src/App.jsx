import React from "react";
import "./app.scss";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skillsSet/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section>
        <Parallax type="skills" />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <Portfolio id="Portfolio"/>
      <section id="About">About</section>
      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;
