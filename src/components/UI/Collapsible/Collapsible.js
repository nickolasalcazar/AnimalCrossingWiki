import "./Collapsible.css";

/**
 * A collapsible UI container that renders any children it is passed.
 */
function Collapsible({ children, disabled = false, loadOpen = false, title }) {
  const toggleCollapsible = (e) => {
    let content = e.currentTarget.nextSibling;
    let show = content.classList.contains("collapsible-active");

    if (show) content.classList.remove("collapsible-active");
    else content.classList.add("collapsible-active");
  };

  return (
    <div className="collapsible">
      <button
        className={`collapsible-btn${disabled ? " disabled" : ""}`}
        onClick={!disabled ? (e) => toggleCollapsible(e) : undefined}
      >
        {title}
      </button>
      <div
        className={`collapsible-content${
          loadOpen ? " collapsible-active" : " collapsible-inactive"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
