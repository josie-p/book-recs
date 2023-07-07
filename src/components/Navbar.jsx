import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> I am navbar</h2>
      <Link to="/">home</Link>
      <Link to="/choose-categories">find books!</Link>
      <Link to="/contact">contact us!</Link>
    </div>
  );
};

export default Navbar;