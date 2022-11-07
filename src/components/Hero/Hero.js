import "./Hero.css";

function Hero({ image, title = "Hero" }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: image ? `url(${image})` : "none",
      }}
    >
      <h1>
        <mark className="stylized-font">{title}</mark>
      </h1>
    </div>
  );
}

export default Hero;
