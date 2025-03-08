import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Contact from "./Components/Contacts/contact";
import Skill from "./Components/Skill/skill";
import Navbar from "./navbar";
import Projects from "./Components/Projects/projects";
import Footer from "./Footer";
import ClickEffectCursor from "./Components/ClickEffectCursor";
import Go from "./Components/go";

function App() {
  return (
    <Router>
      <ClickEffectCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Skill />
            <Go />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
