import React, {useState} from 'react';
import {ChildComponent} from './childComponent'

export const BindingExample = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Parent to child</p>
            <ChildComponent counter= {count} setCounter={() => setCount(count+1)}/>
        </div>
    )
}

