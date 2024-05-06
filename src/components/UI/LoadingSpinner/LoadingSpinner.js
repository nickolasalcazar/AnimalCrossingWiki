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
      <p>The server is asleep and needs up 1 minute to spin up...</p>
    </div>
  );
}
