import React,{useEffect, useState} from 'react';
import { Card } from './card';
export const StateExample = () => {
    const [users , setUsers ] = useState([])
      
      const getUsers = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userList = await response.json()
        setUsers(userList)
      }
    
      useEffect(()=>{
        getUsers()
      },[]) // componentdidmount
      
      
    
      return (
        <div className="App">
           {
            users && users.map((element, index )=> <Card el={element} key={index.toString()}/> ) 
           }
        </div>
    
      );
}