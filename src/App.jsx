import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import MiniProjects from './components/MiniProjects'
import Skills from './components/Skills'
import Funzone from './components/Funzone'
import Footer from './components/Footer'
import Quote from './components/Quote'

const App = () => {

  return (
  <div>
  <Navbar />

  <section id="home">
    <Hero />
  </section>

  <section id="projects">
    <FeaturedProjects />
    <MiniProjects />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="connect">
    <Funzone />
    <Quote />
    <Footer />
  </section>
</div>
  )
}

export default App