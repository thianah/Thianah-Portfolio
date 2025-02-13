import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Contact from "./Components/Contacts/contact";
import Skill from "./Components/Skill/skill";
import Navbar from "./navbar";
import Projects from './Components/Projects/projects'
// import Projects from "./pages/projects";
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
