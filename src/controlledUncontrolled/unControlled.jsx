import React,{useEffect, useRef, useState} from 'react';

export const UnControlled = () => {
        const username = useRef('')
        const [name, setName] = useState('')

        useEffect(()=>{
            console.log('render uncontrolled component')
        })

       const handleSubmit = (ev) => {
           ev.preventDefault()
           username.current.style.borderColor="red"
           setName(username.current.value)

           
       }
       return (
           <>
           <p style={{textAlign:'center'}}>unControlled</p>
           <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:4}}>
           <form onSubmit={(ev) => handleSubmit(ev)}>
               <input type="text" ref={username}/>
               <input type="submit"/>
           </form>

           {name}
          </div>
          </>
       )
}