import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars /> {/* Hamburger Icon */}
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {/* Close Icon inside the menu when it's open */}
          {menuOpen && (
            <li className="close-menu-icon" onClick={toggleMenu}>
              <FaTimes />
            </li>
          )}
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
    </div>
  );
};

export default Navbar;
