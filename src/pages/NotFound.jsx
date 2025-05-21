import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NotFound = () => {
    return (
    <>
    <h1>Page not found</h1>
    <NavLink to="/">Home</NavLink> <br/>
    <NavLink to="/about/users">Users</NavLink>
    
    </>
    )
}