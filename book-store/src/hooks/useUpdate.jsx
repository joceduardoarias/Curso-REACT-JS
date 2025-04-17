import React from 'react'
import axios from "axios";
import { useState } from "react";

const baseURL = "https://localhost:7069/api/";

export const useUpdate = ({consulta}) => {

    const [updateError, setError] = useState(null);

    const UpdateBook = async (DATA) => {
        try {
            const response = await axios.put(`${baseURL}${consulta}?title=${DATA.title}&price=${DATA.price}&description=${DATA.description}&author=${DATA.author}`, {
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

  return [UpdateBook, updateError];
}
