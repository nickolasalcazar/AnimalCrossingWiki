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
        Initial loading time may be delayed as the server needs time to wake up.
      </p>
    </div>
  );
}
