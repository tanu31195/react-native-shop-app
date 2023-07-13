import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://dummyjson.com/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      console.log("🚀 ~ file: useFetch.js:19 ~ fetchData ~ response:", response.data)
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setError(error);
      alert("There is an error while fetching data");
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;