import { useEffect, useState } from "react";

export default function useFetch(url, initialValue) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data,setData] = useState(initialValue)

useEffect(()=> {
    fetch(url)
    .then(response => response.json()) // Transforma obj response a JSON
    .then(data => setData(data))
    .catch(error => setError(error))
    .finally( () => setLoading(false))

}, [url])
return {
    loading,
    error, 
    data

}

}


