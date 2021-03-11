import API_BASE_URL from 'services/api';
import { useEffect, useState } from 'react';

const BASE_URL = `${API_BASE_URL}signup`;
const useFetch = (user) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: user,
      });
      const dataTwo = await response.json();
      setData(dataTwo);
      setStatus('fetched');
    };

    fetchData();
  }, [BASE_URL]);

  return { status, data };
};

export default useFetch;
