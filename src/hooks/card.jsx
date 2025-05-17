import React from 'react';

export const Card = ({el}) => {
    return (
            <div key={el.id} style={{border: '1px solid black', padding: 8}} className='wrapper'>
              <h4>{el.name}</h4>
              <p>{el.username}</p>
              <p>{el.email}</p>
              <pre>
                {el.address.city}, {el.address.street}
              </pre>
            </div>
        )
}