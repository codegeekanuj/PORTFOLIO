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
          <NavLink id="to" to="/">Home</NavLink>
          <NavLink id="to1" to="/About">About</NavLink>
          <NavLink id="to2" to="/Services">Service</NavLink>
          <NavLink id="to3" to="/Contact">Contact</NavLink>
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
