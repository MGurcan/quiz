import React from "react";
import { Link } from 'react-router-dom';
export const Navbar = () =>{
    return (
        <nav className="bg-siyah shadow-md px-10 py-5">
          <div className="container mx-auto md:flex md:items-center">
          <Link to="/"> 
          <button onClick={() => window.location.reload(false)} className="hover:bg-gray text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Find Me
        
          </button>
          </Link>  
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             about
         </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             contact
         </button>
          </div>
        </nav>
    );
};