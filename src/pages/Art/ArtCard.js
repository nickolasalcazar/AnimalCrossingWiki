// import "./VillagerCard.css";

function ArtCard({ artwork }) {
  return (
    <div className="art-card">
      <img src={artwork["image_uri"]} />
      <p>{artwork["name"]["name-USen"]}</p>
    </div>
  );
}

export default ArtCard;
