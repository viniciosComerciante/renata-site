import axios from 'axios';
import {useState, useEffect} from 'react';


export function useRequest<T = unknown>(uri: string){

  const [url, setUrl] = useState(uri);
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);


  useEffect(()=>{
    if(url =="") return;
    axios.get(url)
    .then(response =>{
      setData(response.data);
    })
    .finally(()=>{
      setIsFetching(false);
    })
  },[url])


  return {data, isFetching, url, setUrl};

}
