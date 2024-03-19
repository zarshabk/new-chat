import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
const token = localStorage.getItem("token");
const usePost = (url) => {
  const [loading, setLoading] = useState(false);

  const addData = async (data) => {
    setLoading(true);
    try {
      const resp = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      return resp?.data;
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return { loading, addData };
};

export default usePost;
