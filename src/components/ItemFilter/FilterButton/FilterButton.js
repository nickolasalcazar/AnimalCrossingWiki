import { useEffect, useState } from "react";
import "./FilterButton.css";

/**
 *
 * @param {*} appliedFilters  Array of filters currently applied.
 * @param {*} attribute       The 'attribute' of the button.
 * @param {*} category        The name of the category that 'attribute' belongs to.
 * @param {*} children        Contents of the button.
 * @param {*} onClick         Function that fires when button is pressed.
 * @returns
 */
export default function FilterButton({
  appliedFilters,
  attribute,
  category,
  children,
  onClick,
}) {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
    onClick();
  };

  useEffect(() => {
    // TODO: The following checks should be lifted to and be made in the parent component
    if (category === "themes") {
      if (appliedFilters["themes"]?.includes(attribute)) return;
    }
    if (appliedFilters[category] !== attribute) {
      setActive(false);
    }
  }, [active, appliedFilters, attribute, category]);

  return (
    <button
      className={`filter-btn${active ? " active" : ""}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
