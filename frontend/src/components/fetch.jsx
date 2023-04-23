import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Fetch = (url) => {
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      setloading(true);
      try {
        const res = await axios.get(url);
        setdatas(res.data);
        setloading(false);
      } catch (error) {
        seterrors(error.message);
        setloading(false);
      }
    };
    fetchdata();
  }, [url]);

  return {
    datas,
    loading,
    errors,
  };
};

export default Fetch;
