import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showGames, setShowGames] = useState(false);
  const navRef = useRef(null);

 
  const toggleGames = () => {
    setShowGames(!showGames);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowGames(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-siyah shadow-md px-10 py-5" ref={navRef}>
      <div className="container mx-auto md:flex space-x-5 md:items-center">
        <div className="relative">
          <button
            className="hover:bg-gray text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={toggleGames}
          >
            Games
          </button>
          {showGames && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link to="/big5Teams">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Big Five
                </div>
              </Link>
              <Link to="/superLig">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Süper Lig
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};