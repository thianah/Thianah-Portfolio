import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="homelink" to="/">
        Home
      </Link>

      <Link className="homelink" to="/about">
        About
      </Link>

      <Link className="homelink" to="/contact">
        Contact
      </Link>

      <Link className="homelink" to="/skill">
        Skill
      </Link>

      <Link className="homelink" to="/Projects">
        Projects
      </Link>
    </nav>
  );
}

export default Navbar;
