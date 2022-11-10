import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";

import "./Critters.css";

function Critters(props) {
  return (
    <main>
      <Hero title="Critters" />
      <div>
        <Link to="bugs">
          <h2>Bugs</h2>
        </Link>
        <Link to="fish">
          <h2>Fish</h2>
        </Link>
      </div>
    </main>
  );
}

export default Critters;
