import { useState, useEffect } from 'react'
import { fetchData } from '../helper/fetchData';

export const useFetchData = (endPoint) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getData = async () => {
    const {data,isLoading} = await fetchData(endPoint)
    setData(data)
    setIsLoading(isLoading)
  }

  useEffect(() => {
     getData()     
  }, [endPoint]) // Es util cuando la dependencia en este caso el valor de endPoint cambia. Si la
  // dependencia esta vacía solo se llama a useEffect cuando se cargar la primerar vez
  // el componente.
  
  return { data, isLoading }
}
