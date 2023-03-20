import React from "react";
import { LeagueLogos } from "../../../teamDatas/Big6Teams";

const CardItem = ({player}) => {
  return(
    <div className="w-[300px] h-[500px] bg-gray-light flex flex-col justify-center items-center hover:opacity-70 rounded-md m-4 text-mor">
      <img src={LeagueLogos[player.LeagueName]} className="w-[150px] rounded-md"/>
      <h2>{player.TeamName}</h2>
      <div className="border-2 border-mor w-3/4 h-[80px] rounded-md flex justify-center items-center m-8">
        <h1>{player.Name}</h1>
      </div>
    </div>
  );
};

export default CardItem;