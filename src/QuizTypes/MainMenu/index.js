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
          <img src="https://maniacguess.com/static/images/customLogos/maniacguesslogo.png" className="w-[200px] h-[200px] rounded-md m-4"/>
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