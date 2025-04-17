import { useState } from "react";
import axios from "axios";

const baseURL = "https://localhost:7069/api/";

export const useDelete = ({consulta}) => {

    const [error, setError] = useState(null);

    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`${baseURL}${consulta}?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error al eliminar los datos:", error);
            setError(error);            
        }
    }

    return [deleteData, error];
}

