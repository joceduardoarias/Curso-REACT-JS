import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const getFetch = async () => {
                
        if (!url) return

        try {            
            const response = await fetch(url)
            const data = await response.json();
            setState({
                data,
                isLoading: false,
                errors: null
            })            
            
        } catch (error) {
            setState({
                data,
                isLoading: true,
                errors: error
            })
        }                      
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        errors: state.errors
    }
}
