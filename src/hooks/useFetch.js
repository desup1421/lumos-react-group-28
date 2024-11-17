import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_BASE_URL;

export const useFetch = (url) => {
  const [dataApi, setDataApi] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/${url}`);
        setDataApi(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.response);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const postData = async (newData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/${url}`, newData);
      setDataApi((prevData) => [prevData, response.data.data]);
      console.log(response.data.data);

      setLoading(false);
    } finally {
      setLoading(false);
    }
  };


  return {
    postData,
    dataApi,
    error,
    loading,
  };
};
