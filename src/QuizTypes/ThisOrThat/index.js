import React, { useEffect } from "react";
import CardItem from "./CardItem";
import { PremierLeagueTeams } from "../../teamDatas/PremierLeague";
import { BundesligaTeams } from "../../teamDatas/Bundesliga";
import { SerieATeams } from "../../teamDatas/SerieA";
import { Ligue1Teams } from "../../teamDatas/Ligue1";
import { LaligaTeams } from "../../teamDatas/LaLiga";
import { SuperLigTeams } from "../../teamDatas/SuperLig";
import { Navbar } from "../../components/Navbar";
import { useParams } from "react-router-dom";

const ThisOrThat = () => {
  const routeParams = useParams();
  const league = routeParams.league;

  const [teams, setTeams] = React.useState(PremierLeagueTeams);
  
  useEffect(()=> {
    if(league === 'premierLeague') setTeams(PremierLeagueTeams)
    if(league === 'bundesliga') setTeams(BundesligaTeams)
    if(league === 'serieA') setTeams(SerieATeams)
    if(league === 'ligue1') setTeams(Ligue1Teams)
    if(league === 'laLiga') setTeams(LaligaTeams)
    if(league === 'superLig') setTeams(SuperLigTeams)
  },[league]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const compareValues = (value, compareValue) => {
    let logo = true;

    if(value?.includes('m') && compareValue?.includes('k'))
      logo = true
    else if(value?.includes('k') && compareValue?.includes('m'))
      logo = false
    else{
      const val = parseFloat(value?.substring(1, value.length-1));
      const compareVal = parseFloat(compareValue.substring(1, compareValue.length-1));
      
      logo = compareVal === val ? true : (compareVal > val ? false : true);
    }
    return logo;
  }
  const onClick = (playerId) => {
    if(playerId === 1){
      compareValues(teams[random1].MarketValue, teams[random2].MarketValue) ? setScore(score + 1) : setGameStatus(false);
    }
    else if(playerId === 2){
      compareValues(teams[random2].MarketValue, teams[random1].MarketValue) ? setScore(score + 1) : setGameStatus(false);
    }
  }
  const [random1, setRandom1] = React.useState(getRandomInt(0, teams?.length))
  const [random2, setRandom2] = React.useState(getRandomInt(0, teams?.length))

  const [gameStatus, setGameStatus] = React.useState(true);
  const [score, setScore] = React.useState(0);
  
  React.useEffect(() => {
    if(gameStatus === false){
      window.location.reload(false);
      setScore(0)
    }
    setRandom1(getRandomInt(0, teams?.length));
    setRandom2(getRandomInt(0, teams?.length));
  }, [score, gameStatus]);
  return(
    <div className="w-full min-h-[1000px] bg-gradient-to-r from-yesil to-mavi">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-[32px] text-gray-light p-8">
        <div>Select the player who has higher market value!</div>
        <div>SCORE: {score} </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div onClick={() => onClick(1)}> <CardItem player={teams[random1]}/></div>
        <div onClick={() => onClick(2)}> <CardItem player={teams[random2]}/></div>
      </div>
    </div>
  );
};

export default ThisOrThat;