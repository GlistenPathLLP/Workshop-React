import React, {useState, useEffect} from 'react';

export const Controlled = () => {
    const [username, setUserName] = useState('')
    
    useEffect(()=>{
        console.log('rendering component')
    })
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(username)
    }

    return (
        <>
        <p style={{textAlign:'center'}}>Controlled</p>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <form onSubmit={(ev) => handleSubmit(ev)}>
            <input type="text" value={username} onChange={(event) => setUserName(event.target.value)}/>
            <input type="submit"/>
        </form>
       </div>
       </>
    )
}