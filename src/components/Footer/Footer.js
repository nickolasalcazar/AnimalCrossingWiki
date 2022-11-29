import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Navigation</h2>
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
      <div>
        <h2>Disclaimer</h2>
        <p>
          "Critter Catalog" is an unofficial fan-made website and claims no
          ownership of any intellectual property associated with Nintendo or{" "}
          <em>Animal Crossing</em>.
        </p>
        <p>
          All assets found on this site and its repository are the sole property
          of Nintendo and are only used for non-commercial and educational
          purposes.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
