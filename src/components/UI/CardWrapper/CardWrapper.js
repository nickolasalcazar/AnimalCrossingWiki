import "./CardWrapper.css";

/**
 * A wrapper for content that is to be rendered in a card.
 */
function CardWrapper({ children, className, style }) {
  return (
    <div
      className={className ? `card-wrapper ${className}` : "card-wrapper"}
      style={style}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
