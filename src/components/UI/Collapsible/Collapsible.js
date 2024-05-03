import "./Collapsible.css";

/**
 * A collapsible UI container that renders any children it is passed.
 */
export default function Collapsible({
  children,
  disabled = false,
  open = false,
  title,
}) {
  const toggleCollapsible = (e) => {
    let thisCollapsible = e.currentTarget.parentElement;
    let show = thisCollapsible.classList.contains("collapsible-active");

    if (show) thisCollapsible.classList.remove("collapsible-active");
    else thisCollapsible.classList.add("collapsible-active");
  };
  return (
    <div
      className={`collapsible${
        open ? " collapsible-active" : " collapsible-inactive"
      }`}
    >
      <button
        className={`collapsible-btn${disabled ? " disabled" : ""}`}
        onClick={!disabled ? (e) => toggleCollapsible(e) : undefined}
      >
        {title}
        {disabled ? <></> : <div className="collapsible-arrow">❯</div>}
      </button>
      <div className="collapsible-content">
        <div className={"collapsible-inner-content"}>{children}</div>
      </div>
    </div>
  );
}
