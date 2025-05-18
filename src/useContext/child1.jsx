import React, { useEffect } from 'react';

export const Child1 = React.memo(({counter, increment}) => {

    useEffect(()=>{
        console.log('render child')
    })
    return (<div>
        <p>Child1</p>
        <p>{counter}</p>
        <button onClick={increment}>increment</button>
    </div>)
})