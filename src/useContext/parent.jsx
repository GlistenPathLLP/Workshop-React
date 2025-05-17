import React,{createContext} from 'react';
import { Child1 } from './child1';

export const Parent = () => {

    return (<div>
        
            <p>Parent</p>
            <Child1/>
        
    </div>)
}