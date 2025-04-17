import { useState } from "react";
import axios from "axios";

const baseURL = "https://localhost:7069/api/";

export const usePost = ({ consulta }) => {

    const [error, setError] = useState(null);
    
    const PostData = async (DATA) => {
        try {
            const response = await axios.post(`${baseURL}${consulta}`, DATA, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            setError(error);            
        }

    }



    return [PostData, error];
};
