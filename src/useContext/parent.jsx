import React from 'react';
import { useFetcher } from './customHook';
import { useParams } from 'react-router-dom';

export const Parent = () => {
    const {apiurl} = useParams()
    console.log(apiurl)
    const [data, error] = useFetcher(`https://jsonplaceholder.typicode.com/${apiurl}`)
    return (<div>
            <h2> {apiurl}</h2>
                <p>{JSON.stringify(data)}</p>
            </div>
    )
}