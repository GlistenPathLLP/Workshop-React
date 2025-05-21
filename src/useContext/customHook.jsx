import React,{useEffect, useState} from 'react';

export const useFetcher = (url) => {

    const [apiData, setApiData] = useState([])
    const [error, setError] = useState("")
    
    const _fetcher = async() => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            setApiData(data)
        } catch(er){
            console.log(er)
            setError(er)
        }
    }

    useEffect(()=>{
        _fetcher()
    },[url])

    return [apiData, error]
}