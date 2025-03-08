import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">My Portfolio</div>
          <div className="menu-icon md:hidden" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <ul className={`nav-links md:flex md:items-center md:space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
            <li className="mt-4 md:mt-0">
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li className="mt-4 md:mt-0">
              <a href="contact" className="hover:text-gray-400">Contact</a>
            </li>
            <li className="mt-4 md:mt-0">
              <a href="skill" className="hover:text-gray-400">Skill</a>
            </li>
            <li className="mt-4 md:mt-0">
              <a href="projects" className="hover:text-gray-400">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
