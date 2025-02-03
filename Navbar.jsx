// import React from 'react';

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location =useLocation();
  // console.log(location);
  if(location.pathname=='/axiosaddres' || location.pathname=='/updateadress' || location.pathname=='/addaddress'){ 
    return null;
  }
  else{
    return (
      <div data-aos="fade-down">
        <div className="flex justify-between items-center px-6 py-4 h-20 border border-orange-400 font-semibold bg-gradient-to-r from-orange-500 to-yellow-500">
          {/* Logo on the left */}
          <div className="text-2xl">
            <Link to="./"> Jspiders Fashions</Link>
           </div>
          {/* Navigation links on the right */}
          <div className="flex items-center gap-4">
          <Link to="/home">Men</Link>
          <Link to="/about">Women</Link>
          <Link to="/jowellary">Jowellary</Link>
          <Link to="/menu">Electronincs</Link>
          <Link to="/women">Athentication</Link>
          </div>
        </div>
      </div>
    );
  }
}; 

export default Navbar;
