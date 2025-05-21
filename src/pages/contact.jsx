import React from 'react';
import { NavLink, Link , Outlet } from 'react-router-dom';

export const Contact = () => {
    return (
    <>
    <h1>Contact</h1>
    <NavLink to="/">Home</NavLink> <br/>
    <NavLink to="/about/users">Users</NavLink>
    <br/>
    <Link to="">Contact1</Link> <br/>
    <Link to="contact2">Contact2</Link>
     <Outlet/>   

    </>
    )
}