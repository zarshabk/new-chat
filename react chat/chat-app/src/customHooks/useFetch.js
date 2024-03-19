import { useEffect, useState } from "react";
import axios from "axios";
const token = localStorage.getItem("token");
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      setLoading(true);
      try {
        const resp = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTimeout(() => {
          setData(resp?.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setLoading(false);
        setError(error?.response?.data?.message);
      }
    };
    getData();
    setLoading(false);
  }, [url]);

  return { error, data, loading };
};

export default useFetch;
