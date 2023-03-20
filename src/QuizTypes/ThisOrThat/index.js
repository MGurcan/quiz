import React from "react";
import CardItem from "./CardItem";
import { PremierLeagueTeams } from "../../teamDatas/PremierLeague";
import { Navbar } from "../../components/Navbar";

const ThisOrThat = () => {

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
    console.log(logo)
    return logo;
  }
  const onClick = (playerId) => {
    console.log("playerID: ", playerId)
    console.log("1: ", PremierLeagueTeams[random1].MarketValue)
    console.log("2: ", PremierLeagueTeams[random2].MarketValue)
    if(playerId === 1){
      compareValues(PremierLeagueTeams[random1].MarketValue, PremierLeagueTeams[random2].MarketValue) ? setScore(score + 1) : setGameStatus(false);
    }
    else if(playerId === 2){
      compareValues(PremierLeagueTeams[random2].MarketValue, PremierLeagueTeams[random1].MarketValue) ? setScore(score + 1) : setGameStatus(false);
    }
  }
  const [random1, setRandom1] = React.useState(getRandomInt(0, PremierLeagueTeams.length))
  const [random2, setRandom2] = React.useState(getRandomInt(0, PremierLeagueTeams.length))

  const [gameStatus, setGameStatus] = React.useState(true);
  const [score, setScore] = React.useState(0);
  
  React.useEffect(() => {
    if(gameStatus === false){
      console.log("OYUN BITTI");
      setScore(0)
    }
    setRandom1(getRandomInt(0, PremierLeagueTeams.length));
    setRandom2(getRandomInt(0, PremierLeagueTeams.length));
  }, [score, gameStatus]);
  return(
    <div>
      <Navbar />
      <div>SCORE: {score} </div>
      <div className="flex flex-row justify-center items-center">
        <div onClick={() => onClick(1)}> <CardItem player={PremierLeagueTeams[random1]}/></div>
        <div onClick={() => onClick(2)}> <CardItem player={PremierLeagueTeams[random2]}/></div>
      </div>
    </div>
  );
};

export default ThisOrThat;