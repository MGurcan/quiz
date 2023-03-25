import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showGames, setShowGames] = useState(false);
  const [showGames2, setShowGames2] = useState(false);
  const navRef = useRef(null);

 
  const toggleGames = () => {
    setShowGames(!showGames);
  };
  const toggleGames2 = () => {
    setShowGames2(!showGames2);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowGames(false);
        setShowGames2(false);
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
        <Link to="/"> 
          <button 
            className="hover:bg-gray text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Main Menu
          </button>
        </Link> 
        <div className="relative">
          <button
            className="hover:bg-gray text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={toggleGames}
          >
            Find me
          </button>
          {showGames && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link to="/findMe/big5Teams">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Big Five
                </div>
              </Link>
              <Link to="/findMe/superLig">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Süper Lig
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="hover:bg-gray text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={toggleGames2}
          >
            ThisOrThat
          </button>
          {showGames2 && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link to="/thisOrThat/premierLeague">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Premier League
                </div>
              </Link>
              <Link to="/thisOrThat/bundesliga">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Bundesliga
                </div>
              </Link>
              <Link to="/thisOrThat/serieA">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Serie A
                </div>
              </Link>
              <Link to="/thisOrThat/ligue1">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  Ligue 1
                </div>
              </Link>
              <Link to="/thisOrThat/laLiga">
                <div className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
                  La Liga
                </div>
              </Link>
              <Link to="/thisOrThat/superLig">
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