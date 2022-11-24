import { useEffect, useState } from "react";

import "./FilterButton.css";

function FilterButton({
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
    if (appliedFilters[category] !== attribute) {
      setActive(false);
    }
  }, [active, appliedFilters]);

  return (
    <button
      className={`filter-btn${active ? " active" : ""}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;
