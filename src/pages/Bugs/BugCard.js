// import "./VillagerCard.css";

function BugCard({ bug }) {
  return (
    <div className="bug-card">
      <img src={bug["icon_uri"]} />
      <p>{bug["name"]["name-USen"]}</p>
    </div>
  );
}

export default BugCard;
