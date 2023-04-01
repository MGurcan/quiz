import React from "react";
import { Big6TeamsLogos } from "../../../teamDatas/Big6Teams";

const CardItem = ({player}) => {
  return(
    <div className="w-[300px] h-[500px] text-center bg-gray-light flex flex-col justify-center items-center hover:opacity-70 rounded-md m-4 text-mor max-md:w-[150px] max-md:h-[300px]">
      <img src={Big6TeamsLogos[player?.TeamName]} className="w-[150px] rounded-md max-md:w-[75px]"/>
      <h2 className="p-4">{player?.TeamName}</h2>
      <div className="border-2 border-mor w-3/4 h-[80px] rounded-md flex justify-center items-center m-8 max-md:m-4">
        <h1>{player?.Name}</h1>
      </div>
    </div>
  );
};

export default CardItem;