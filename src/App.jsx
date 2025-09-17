import React, { useState, useEffect } from "react";
import Welcome from "./components/welcome/Welcome";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import MiniProjects from "./components/miniProjects/miniProjects";
import Skills from "./components/skills/Skills";
import ReachMe from "./components/reachMe/ReachMe";
import FindMe from "./components/findme/FindMe";
import Footer from "./components/footer/Footer";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowWelcome(false), 1000);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) return <Welcome fadeOut={fadeOut} />;

  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Project />
      </section>
        <MiniProjects />
      <section id="skills">
        <Skills />
      </section>
      <section id="reach-me">
        <ReachMe />
      </section>
      <section id="find-me">
        <FindMe />
      </section>
      <Footer />
    </div>
  );
};

export default App;
