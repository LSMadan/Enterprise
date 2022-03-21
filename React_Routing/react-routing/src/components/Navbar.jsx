import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
        <li><NavLink activeClassName="active" to="/categories">Categories</NavLink></li>
        <li><NavLink activeClassName="active" to="/product">Product</NavLink></li>
        <li><NavLink activeClassName="active" to="/signup">SignUp</NavLink></li>
      </ul>
    </>
  );
};
export default Navbar;
