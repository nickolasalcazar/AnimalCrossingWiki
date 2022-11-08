import "./CardWrapper.css";

/**
 * A wrapper for content that is to be rendered in a card.
 */
function CardWrapper({ children, className }) {
  return (
    <div className={className ? `card-wrapper ${className}` : "card-wrapper"}>
      {children}
    </div>
  );
}

export default CardWrapper;
