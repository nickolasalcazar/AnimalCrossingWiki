import "./NavBar.css";

import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo />
        <ul>
          <li>Items</li>
          <li>Villagers</li>
          <li>Critters</li>
          <li>Art</li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
