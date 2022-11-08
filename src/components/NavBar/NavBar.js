import { Link } from "react-router-dom";

import "./NavBar.css";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
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
