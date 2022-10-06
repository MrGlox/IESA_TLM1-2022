import { useEffect, useState } from "react";

export default function Fetch() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );

      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (isLoading) return "Loading...";

  if (error) return error;

  return <>{data}</>;
}
