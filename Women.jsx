// import React from 'react'//Women
import { NavLink } from "react-router-dom";

const Women = () => {

  return (
    <>
     <div className="flex h-20 space-x-80 p-6 bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-2xl">
        <div className="font-semibold">
          <NavLink to="/">JSPIDERS</NavLink>
        </div>
      <NavLink to="/signup"><div>SIGN UP</div></NavLink>
      <NavLink to="/signin"><div>SIGN IN</div></NavLink>
      </div>
    
      
    </>
  );
};

export default Women;

