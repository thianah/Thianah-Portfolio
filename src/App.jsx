import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Skill from "./pages/skill";
import Navbar from "./navbar";
import Projects from "./pages/projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <Skill />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
