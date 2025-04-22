import { useState, useEffect } from 'react'

export const useFetchData = (endPoint) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
    const data = await response.json()
    setData(data)
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [endPoint]) // Es util cuando la dependencia en este caso el valor de endPoint cambia. Si la
  // dependencia esta vacía solo se llama a useEffect cuando se cargar la primerar vez
  // el componente.
  return { data, isLoading }
}
