import React from 'react';
import './app.scss'
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Skills from './components/skillsSet/Skills';


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <NavBar/>
        <Hero/>
      </section>
      <section ><Parallax type="skills"/></section>
      <section id="Skills"><Skills/></section>
      <section ><Parallax type="portfolio"/></section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section id="About">Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  )
}

export default App