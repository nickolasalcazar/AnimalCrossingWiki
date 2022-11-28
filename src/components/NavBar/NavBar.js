import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const [shrink, setShrink] = useState(false);
  const navbar = document.querySelector(".navbar");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShrink(false);
    navbar.classList.remove("shrunk");
  };

  const handleHamburgerOnClick = () => {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navbarMenu = document.querySelector(".navbar-menu");
    hamburger.classList.toggle("active");
    const hamburgerOpen = hamburger.classList.contains("active");

    if (hamburgerOpen) {
      navbarMenu.classList.add("active");
      navbar.classList.remove("shrunk");
    } else {
      navbarMenu.classList.remove("active");
      if (window.pageYOffset <= 50) navbar.classList.remove("shrunk");
      else navbar.classList.add("shrunk");
    }
  };

  const handleLinkOnClick = () => {
    const hamburger = document.getElementById("hamburger");
    const navbarMenu = document.querySelector(".navbar-menu");
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navbarMenu.classList.remove("active");
    }
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (
          document.getElementById("hamburger").classList.contains("active") ||
          window.pageYOffset <= 50
        ) {
          setShrink(false);
          navbar.classList.remove("shrunk");
        } else if (
          !document.getElementById("hamburger").classList.contains("active") &&
          window.pageYOffset >= 250
        ) {
          setShrink(true);
          navbar.classList.add("shrunk");
        }
      });
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo
          shrink={shrink}
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        />
        <ul className="navbar-menu" style={{ top: "115px" }}>
          <li>
            <Link to="/" onClick={handleLinkOnClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/furniture" onClick={handleLinkOnClick}>
              Furniture
            </Link>
          </li>
          <li>
            <Link to="/villagers" onClick={handleLinkOnClick}>
              Villagers
            </Link>
          </li>
          <li>
            <Link to="/critters" onClick={handleLinkOnClick}>
              Critters
            </Link>
          </li>
          <li>
            <Link to="/art" onClick={handleLinkOnClick}>
              Art
            </Link>
          </li>
        </ul>
        <button id="hamburger" onClick={handleHamburgerOnClick}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
