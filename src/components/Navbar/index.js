import React from "react";
import { Link } from 'react-router-dom';
export const Navbar = () =>{
    return (
        <nav className="bg-siyah shadow-md px-10 py-5">  
          <div className="container mx-auto md:flex space-x-5 md:items-center">
            <Link to="/big5Teams"> 
                <button 
                    className="hover:bg-gray text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Big Five
                </button>
            </Link> 

            <Link to="/superLig"> 
                <button 
                    className="hover:bg-gray text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Süper Lig
                </button>
            </Link>

        
          </div>
        </nav>
    );
};