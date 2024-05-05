import "./LoadingSpinner.css";

/**
 * Renders a loading spinner that is used to be displayed while data is loading.
 */
export default function LoadingSpinner() {
  return (
    <div
      className="loading-spinner"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <img src="assets/categories/furniture.png" />
      <h2>Loading...</h2>
      <p>
        The server may be asleep and needs time to spin up. This may take up to
        30 seconds.
      </p>
    </div>
  );
}
