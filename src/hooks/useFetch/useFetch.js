import {useState, useEffect} from 'react';
import axios from 'axios';

const baseUrl = 'http://10.0.2.2:3000/';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}${url}`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {loading, error, data};
};

export default useFetch;