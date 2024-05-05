import { useState, useEffect } from "react";

/**
 * Makes a GET request to URL with given options.
 *
 * @param {string} url      URL to fetch from.
 * @param {object} options  Options to configure request.
 * @returns
 */
export default function useFetchGET(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, { method: "GET", ...options })
      .then((response) => {
        if (!response.ok)
          throw new Error("Error:", response.status, response.statusText);
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
