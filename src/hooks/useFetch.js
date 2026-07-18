import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // 1. Setup the three state variables required by the problem statement
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        // If the response is not okay (e.g., 404), throw an error manually
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server.');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        // This catch block handles network failures (like turning off Wi-Fi)
        setError(err.message);
        setData(null);
      } finally {
        // Whether it succeeds or fails, loading is finished
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Rerun the effect if the URL ever changes

  // Return the specific values requested in the problem statement
  return { data, loading, error };
};

export default useFetch;