import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
const useAuth = (url) => {
  const [loading, setLoading] = useState(false);

  const postData = async (data) => {
    setLoading(true);
    try {
      const resp = await axios.post(url, data);
      setLoading(false);
      return resp?.data;
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return { loading, postData };
};

export default useAuth;
