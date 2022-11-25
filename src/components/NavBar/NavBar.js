import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 250) {
          setShrink(true);
          navbar.classList.add("shrunk");
        } else if (window.pageYOffset <= 50) {
          setShrink(false);
          navbar.classList.remove("shrunk");
        }
      });
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo shrink={shrink} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/furniture">Furniture</Link>
          </li>
          <li>
            <Link to="/villagers">Villagers</Link>
          </li>
          <li>
            <Link to="/critters">Critters</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
