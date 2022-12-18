import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
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
            <Link to="/bugs">Bugs</Link>
          </li>
          <li>
            <Link to="/fish">Fish</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Disclaimer</h2>

        <p>
          "Critter Catalog" is an unofficial fan-made website that is not
          affiliated with Nintendo or its <em>Animal Crossing</em> series.
        </p>
        <p>
          All assets found on this website and repository are the sole property
          of Nintendo and are used exclusively for non-commercial and
          educational purposes. This website does not endorse or condone any
          commercial use of these assets, and should not be indexed on the web.
        </p>
      </section>
      <div className="credit">
        <p>
          Created by Nickolas Alcazar
          <span className="divider">|</span>
          <a href="https://nalcazar.com" target="_blank">
            nalcazar.com
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
