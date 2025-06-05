import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Blog-boot">
       
        <ul >
            <li> <NavLink to="/home" >Bloggy Home</NavLink></li>
            <li> <NavLink to="/MakeMake" >Bloggy Create</NavLink></li>
            <li> <NavLink to="/view" >Bloggy View</NavLink></li>
        </ul>
        <div className="blog-title"> Bloggy Blog </div>

    </nav>
  )
}

export default Navbar