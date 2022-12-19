import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import "./Homepage.css";

function Homepage(props) {
  return (
    <main className="homepage">
      <article className="welcome">
        <div
          className="welcome-title-bg"
          style={{ backgroundImage: "url('assets/tommy-and-timmy.png')" }}
        >
          <h1>Welcome</h1>
        </div>
        <section>
          <p>
            Welcome to our website dedicated to the wonderful world of{" "}
            <em>Animal Crossing: New Horizons</em>!
          </p>
          <p>
            Here, you can explore all of the different items and villagers found
            in the game, learn about their unique attributes and
            characteristics, and easily search for them using our convenient
            online tools.
          </p>
          <p>
            Whether you're a seasoned player or new to the game, we hope you
            find our site useful and enjoyable. Happy browsing!
          </p>
        </section>
      </article>
      <article className="explore-by-category-wrapper">
        <h2 className="explore-by-category">Explore by Category</h2>
        <nav>
          <ul>
            <li>
              <Link to="/furniture">
                Furniture
                <img src="/assets/categories/furniture.png" />
              </Link>
            </li>
            <li>
              <Link to="/villagers">
                Villagers
                <img src="/assets/categories/villagers.png" />
              </Link>
            </li>
            <li>
              <Link to="/bugs">
                Bugs
                <img src="/assets/categories/bugs.png" />
              </Link>
            </li>
            <li>
              <Link to="/fish">
                Fish
                <img src="/assets/categories/fish.png" />
              </Link>
            </li>
            <li>
              <Link to="/art">
                Art
                <img src="/assets/categories/art.png" />
              </Link>
            </li>
            <li className="disabled">
              <Link to="/fossils" style={{ pointerEvents: "none" }}>
                Fossils
                <img src="/assets/categories/fossils.png" />
                <span className="coming-soon">
                  <mark>Coming Soon</mark>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </article>
      <article className="about">
        <h2>About</h2>
        <section>
          <p>This site is a hobby project made using React.js.</p>
          <p>
            Data on this site is fetched from{" "}
            <a
              style={{
                textDecoration: "underline",
                color: "var(--light-blue)",
              }}
              href="https://acnhapi.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              ACNH API
            </a>
            , a free Animal Crossing RESTful API.
          </p>
          <p>
            Check out Critter Catalog's GitHub repo{" "}
            <a
              href="https://github.com/nickolasalcazar/AnimalCrossingWiki"
              target={"_blank"}
              rel="noreferrer"
              style={{
                textDecoration: "underline",
                color: "var(--light-blue)",
              }}
            >
              here
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}

export default Homepage;
