import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Skill from "./pages/skill";
import Navbar from "./navbar";
import Projects from "./pages/projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}>
          {/*use relative paths for nested routes */}
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
export default App;
