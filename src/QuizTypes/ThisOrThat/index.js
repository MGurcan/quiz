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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { VscDebugRestart } from 'react-icons/vsc';
import { TiTick } from 'react-icons/ti';
import { LeagueLogos } from "../../teamDatas/Big6Teams";

const ThisOrThat = () => {
  const routeParams = useParams();
  const league = routeParams.league;

  const [teams, setTeams] = React.useState(PremierLeagueTeams);
  const [leagueLogo, setLeagueLogo] = React.useState('Premier League');

  const [gameType, setGameType] = React.useState('marketValue');

  useEffect(()=> {
    setScore(0);
    if(league === 'premierLeague'){ setTeams(PremierLeagueTeams);  setLeagueLogo('Premier League')}
    if(league === 'bundesliga'){ setTeams(BundesligaTeams);  setLeagueLogo('Bundesliga')}
    if(league === 'serieA'){ setTeams(SerieATeams);  setLeagueLogo('Serie A')}
    if(league === 'ligue1'){ setTeams(Ligue1Teams);  setLeagueLogo('Ligue1')}
    if(league === 'laLiga'){ setTeams(LaligaTeams);  setLeagueLogo('Laliga')}
    if(league === 'superLig'){ setTeams(SuperLigTeams);  setLeagueLogo('S\u00fcper Lig')}
  },[league]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const compareFeatures = (value, compareValue) => {
    if(gameType === 'age'){
      return compareAges(value, compareValue);
    }
    else {
      return compareMarketValues(value, compareValue);
    }
  };

  const compareMarketValues = (player, comparePlayer) => {
    const value = player.MarketValue;
    const compareValue = comparePlayer.MarketValue;
    
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

  const getAgeFromBirthDate = (birthDate) => {
    return parseInt(birthDate.substring(birthDate.indexOf('(')+1, birthDate.indexOf('(')+3));
  }

  const compareAges = (player, comparePlayer) => {
    const value = getAgeFromBirthDate(player.BirthDate);
    const compareValue = getAgeFromBirthDate(comparePlayer.BirthDate);

    if (value < compareValue ) return false;
    
    return true;
  }

  const onClick = (playerId) => {
    if(playerId === 1){
      if(compareFeatures(teams[random1], teams[random2])){
        setScore(score + 1);
        setShowCorrectAnswer(true);
      }
      else{
        setGameStatus(false);
      }
    }
    else if(playerId === 2){
      if(compareFeatures(teams[random2], teams[random1])){
        setScore(score + 1);
        setShowCorrectAnswer(true);
      }
      else{
        setGameStatus(false);
      }
    }
  }
  const [random1, setRandom1] = React.useState(getRandomInt(0, teams?.length))
  const [random2, setRandom2] = React.useState(getRandomInt(0, teams?.length))

  const [gameStatus, setGameStatus] = React.useState(true);
  const [score, setScore] = React.useState(0);
  
  React.useEffect(() => {
    setRandom1(getRandomInt(0, teams?.length));
    setRandom2(getRandomInt(0, teams?.length));
  }, [score, teams?.length]);

  const playAgain = () => {
    setScore(0);
    setGameStatus(true);
  };

  const changeGameType = (type) => {
    if(gameType !== type){
      setGameType(type);
      setScore(0);
    }
  };

  const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false);
  React.useEffect(() => {
    let timeoutId;
    if (showCorrectAnswer) {
      timeoutId = setTimeout(() => {
        setShowCorrectAnswer(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showCorrectAnswer]);

  const fadeDuration = 500; // duration of fade animation in milliseconds

  const fadeInAnimation = keyframes`${fadeIn}`;
  
  const FadeInDiv0 = styled.div`
    animation: ${fadeDuration}ms ${fadeInAnimation};
  `;

  const FadeInDiv1 = styled.div`
  animation: ${fadeDuration+1000}ms ${fadeInAnimation};
  `;

  const FadeInDiv2 = styled.div`
  animation: ${fadeDuration+2000}ms ${fadeInAnimation};
  `;

  const FalseAnimation = ({player1, player2}) => {
    return(
    <TransitionGroup className="w-[650px] flex flex-col justify-center m-2 items-center text-center text-gray-light bg-red h-[300px] rounded-md">
      <span className="text-[24px]">You Lost</span>
      <span className="text-[24px]">Score: {score}</span>
      <div className="flex flex-row justify-center items-center p-4">
        <CSSTransition timeout={fadeDuration} className="fade p-8">
          <FadeInDiv0>
            <span className="w-[300px] border-2 border-gray-light p-4 rounded-md">{player1.Name}(<strong className="underline p-2">{gameType==='marketValue' ? player1.MarketValue : getAgeFromBirthDate(player1.BirthDate)}</strong>)</span>
          </FadeInDiv0>
        </CSSTransition>

        <CSSTransition timeout={fadeDuration} className="fade p-8">
          <FadeInDiv1>
            <span className="w-[300px] border-2 border-gray-light p-4 rounded-md">{player2.Name}(<strong className="underline p-2">{gameType==='marketValue' ? player2.MarketValue : getAgeFromBirthDate(player2.BirthDate)}</strong>)</span>
          </FadeInDiv1>
        </CSSTransition>
      </div>
      <CSSTransition timeout={fadeDuration} classNames="fade">
        <FadeInDiv2><button onClick={playAgain}>{<VscDebugRestart size={32}/>}</button></FadeInDiv2>
      </CSSTransition>
    </TransitionGroup >
    )  
  }

  const TrueAnimation = () => {
    return(
    <TransitionGroup className="w-[250px] h-[250px] flex flex-col justify-center m-2 items-center text-center text-gray-light bg-green rounded-full">
      <span className="text-mor text-[32px]">Nice!</span>
      <CSSTransition timeout={fadeDuration} classNames="fade">
        <FadeInDiv2>{<TiTick size={32} color='purple'/>}</FadeInDiv2>
      </CSSTransition>
    </TransitionGroup >
    )  
  }
  return(
    <div className="relative w-full min-h-[1000px] bg-gradient-to-r from-yesil to-mavi">
      <Navbar />
      <div className="w-full flex justify-center p-4">
        <button className={`${gameType === 'marketValue' ? 'bg-gray-light text-mor' : ''} text-gray-light text-[18px] border-2 border-mor w-[200px] rounded-md p-4 hover:bg-gray-light hover:cursor-pointer hover:text-mor m-2`} onClick={() => changeGameType('marketValue')}>MARKET VALUE</button>
        <button className={`${gameType === 'age' ? 'bg-gray-light text-mor' : ''} text-gray-light text-[18px] border-2 border-mor w-[200px] rounded-md p-4 hover:bg-gray-light hover:cursor-pointer hover:text-mor m-2`} onClick={() => changeGameType('age')}>AGE</button>
      </div>
      <div className="flex flex-col justify-center items-center text-[32px] text-center text-gray-light p-8 max-md:text-[20px]">
        <div>Select the player who {gameType === 'marketValue' ? <>has higher <strong className='text-mor underline decoration-double'>'Market Value'</strong></> : <>is <strong className='text-mor underline decoration-double'>'older'</strong></>}</div>
        <div>SCORE: {score} </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div onClick={() => onClick(1)}> <CardItem player={teams[random1]}/></div>
        <div onClick={() => onClick(2)}> <CardItem player={teams[random2]}/></div>
      </div>

    {!gameStatus && 
        <div className="absolute inset-0 flex items-center justify-center">
        <FalseAnimation player1={teams[random1]} player2={teams[random2]}/>
      </div>
    }

    {showCorrectAnswer && 
        <div className="absolute inset-0 flex items-center justify-center">
        <TrueAnimation player1={teams[random1]} player2={teams[random2]}/>
      </div>
    }
    <div className="w-full flex justify-center items-center">
      <img src={LeagueLogos[leagueLogo]} className="w-[150px] rounded-md"/>
    </div>
    </div>
  );
};

export default ThisOrThat;