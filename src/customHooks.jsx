import { useEffect, useState, useRef } from "react";

export function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

export const fetcher = async (url, options) => {

    const response = await fetch(url, options);
    if(response.ok){
      const json = await response.json();
      console.log(json)
      return json;
    }

}

export function useFetch(url, options){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const prevData = usePrevious(data);


  useEffect(() => {

    const fetcher = async () => {
      setIsLoading(true);
      const response = await fetch(url, options? options : null);
      
      if(response.ok){
        const json = await response.json();
        if(prevData !== json){
          setData(json)
        }
        setIsLoading(false);
  
      } else {
        const json = await response.json();
        setError(json);
        setIsLoading(false);
  
      }
    }

    fetcher();

   
  }, [options, url])

  return {data, error, isLoading};
}