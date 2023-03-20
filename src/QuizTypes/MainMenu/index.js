import React from "react";
import { Navbar } from "../../components/Navbar";
import QuizTypeCard from "../QuizTypeCard";

const MainMenu = () => {
  return(
    <div className="min-h-[1000px] w-full text-siyah font-serif bg-gradient-to-r from-yesil to-mavi">
      <Navbar />
      <div className="w-full text-gray-light flex flex-col justify-center items-center">
       
        <div className="border-2 border-gray-light rounded-md p-4 m-4">
          <h1 className="text-gray-light text-[50px]">ManiacGuess</h1>
          <h2 className="text-gray-light text-[30px]">Sky is the Limit for now</h2>
        </div>
        <ul className="flex flex-row justify-center items-center p-4">
          <li className="m-4">
            <QuizTypeCard gameName={'Find Me'} link={'/big5Teams'}/>
          </li>
          <li className="m-4">
            <QuizTypeCard gameName={'This or That'} link={'/thisOrThat'}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;