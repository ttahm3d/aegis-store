import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = ({ apiUrl, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const performXHRActivity = async () => {
      try {
        const response = await axios[method](apiUrl, headers, body);
        setResponse(response);
      } catch (e) {
        console.log("test");
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    performXHRActivity();
  }, [apiUrl, method, body]);

  return { response, error, isLoading };
};

export default useAxios;
