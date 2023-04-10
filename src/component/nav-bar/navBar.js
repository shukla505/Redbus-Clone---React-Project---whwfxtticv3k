import React from "react";
import "./navBar.css";


import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
      <div className="navbar">
           <NavLink to="/" className="logo">
              Red Bus Clone
            </NavLink>
          {/* <div className="nav-links">
            <div className="nav-link">
            <NavLink to="/Booking" className="navlink">
            My Booking
            </NavLink>
            </div>
            <div className="nav-link">
            {
              login ? (<NavLink to="/" className="navlink">
            Logout
           </NavLink>) : (<NavLink to="/login" className="navlink">
              Login
            </NavLink>)
            }
            </div> 
          </div> */}
            
         
          
        
      </div>
  );
};
export { NavBar };
