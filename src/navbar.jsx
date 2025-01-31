import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#testcontact">Contact</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
