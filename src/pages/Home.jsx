import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Home = () => {
    return (
    <>
    <h1>Home Page</h1>
    <NavLink to="/about/users">Users</NavLink>
    <br/>
     <Link to="/about/posts">Posts</Link>
    </>
    )
}