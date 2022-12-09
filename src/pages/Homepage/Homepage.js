import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import "./Homepage.css";

function Homepage(props) {
  return (
    <main className="homepage">
      {/* <Hero title="Welcome" /> */}
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
      <h2 className="explore-by-category">Explore by Category:</h2>
      <nav>
        <ul>
          <li>
            <Link to="/furniture">Furniture</Link>
          </li>
          <li>
            <Link to="/villagers">Villagers</Link>
          </li>
          <li>
            <Link to="/critters/bugs">Bugs</Link>
          </li>
          <li>
            <Link to="/critters/fish">Fish</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
          <li>
            <Link to="/Fossils">Fossils</Link>
          </li>
        </ul>
      </nav>
      <article>
        <h2>About</h2>
      </article>
      <article>
        <h2>Credit</h2>
      </article>
    </main>
  );
}

export default Homepage;
