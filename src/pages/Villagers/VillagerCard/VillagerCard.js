import "./VillagerCard.css";

function VillagerCard({ villager }) {
  return (
    <div className="villager-card">
      <img src={villager["icon_uri"]} />
      <p>{villager["name"]["name-USen"]}</p>
    </div>
  );
}

export default VillagerCard;