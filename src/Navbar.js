import React from "react";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="logo">
        <h1>Anuj Tripathi</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Services">Service</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
      <div className="icons">
      <i class="fa-solid fa-mug-hot"></i>
      </div>
    </nav>
    
</>
  );
};

export default Navbar;
