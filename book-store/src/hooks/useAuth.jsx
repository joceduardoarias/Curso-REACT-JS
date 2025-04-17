import { useState } from "react";
import axios from "axios";

const baseURL = "https://localhost:7069/api/";

export const useAuth = ({ consulta }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const maxRetries = 3;
  
    const PostData = async (DATA) => {
      let attempts = 0;
      setLoading(true);
      setError(null);
  
      while (attempts < maxRetries) {
        try {
          const response = await axios.post(`${baseURL}${consulta}`, DATA, {
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          return response.data;
        } catch (error) {

          if (error.response && error.response.status === 500) {


            if (attempts >= maxRetries) {
              setError(error);

              throw error;
            }
  
            await new Promise((resolve) => setTimeout(resolve, 500));
          } else {

            setError(error);

            console.error("Error:", error.response ? error.response.data : error.message);
            throw error;
          }
        } finally {
          setLoading(false);
        }
      }
    };
  
    return [PostData, loading, error];
  };