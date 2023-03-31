import React from "react";
import { Navbar } from "../../components/Navbar";
import QuizTypeCard from "../QuizTypeCard";
import ThisOrThatCard from "../ThisOrThat/QuizTypeCard";
import SoccerPlayerNameCard from "../SoccerPlayerName/QuizTypeCard";

const MainMenu = () => {
  return(
    <>
      <div className="relative min-h-[1000px] w-full text-siyah font-serif bg-gradient-to-r from-yesil to-mavi">
        <Navbar />
        <div className="w-full text-gray-light flex flex-col justify-center items-center">
        
          <div className="border-2 border-gray-light rounded-md p-4 m-4">
            <h1 className="text-gray-light text-[50px]">ManiacGuess</h1>
          </div>
          <ul className="flex flex-row justify-center items-center p-4 max-md:flex-col">
            <li className="m-4">
              <QuizTypeCard item={<SoccerPlayerNameCard />} />
            </li>
            <li className="m-4">
              <QuizTypeCard item={<ThisOrThatCard />} />
            </li>
          </ul>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default MainMenu;