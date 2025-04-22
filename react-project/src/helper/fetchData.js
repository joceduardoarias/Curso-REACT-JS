export const fetchData = async (endPoint) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
    const data = await response.json()
    return {data, isLoading:false}    
  }