import React, { useEffect, useState } from "react";
import PredictionInput from "../../components/PredictionInput";
import { BsArrowDown, BsArrowUp, BsArrowsMove } from 'react-icons/bs';
import { IoMdFootball } from 'react-icons/io';
import { GiGoalKeeper, GiCheckedShield } from 'react-icons/gi';
import { Big5Teams } from "../../teamDatas/Big6Teams";
import { SuperLigTeams } from "../../teamDatas/SuperLig";
import {quizPlayerBig5Leage, quizPlayerSuperLig} from "../../teamDatas/QuizPlayers";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Big6TeamsLogos } from "../../teamDatas/Big6Teams";
import { LeagueLogos } from "../../teamDatas/Big6Teams";
import {MdOutlineDoNotDisturb} from 'react-icons/md';
import AlertItem from "../../components/AlertItem";
import { Navbar } from "../../components/Navbar";
import { CountryFlags } from "../../teamDatas/Country";
import { LatinizeLetters } from "../../teamDatas/LatiniseLetters";
import TimeCounter from "../../components/TimeCounter";

const SoccerPlayerName = ({ gameType }) => {
  
  const [text, onChangeText] = React.useState('');
  const [players, setPlayers] = React.useState(null);
  const [predictions, setPredictions] = React.useState([]);

  const [comparePlayer, setcomparePlayer] = useState(gameType === 'big5Teams' ? quizPlayerBig5Leage : quizPlayerSuperLig);
  const [win, setWin] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  useEffect(() => {
    setcomparePlayer(gameType === 'big5Teams' ? quizPlayerBig5Leage : quizPlayerSuperLig)
    setPredictions([])
    setWin(false)
    setQuizFinished(false)
    setAnimationPrediction(false)
    onChangeText('');

  }, [gameType])
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
  const FadeInDiv3 = styled.div`
  animation: ${fadeDuration+3000}ms ${fadeInAnimation};
  `;
  const FadeInDiv4 = styled.div`
  animation: ${fadeDuration+4000}ms ${fadeInAnimation};
  `;
  const FadeInDiv5 = styled.div`
  animation: ${fadeDuration+5000}ms ${fadeInAnimation};
  `;
  const FadeInDiv6 = styled.div`
  animation: ${fadeDuration+6000}ms ${fadeInAnimation};
  `;


  const [animationPrediction, setAnimationPrediction] = useState(false);

  const handleAddNewPredict = (e) => {
    onChangeText('');
    setAnimationPrediction(true);
    if(quizFinished) return 
    setPredictions([e, ...predictions]);
    if(e.Name === comparePlayer.Name && e.BirthDate === comparePlayer.BirthDate){
      setWin(true);
      setQuizFinished(true);
    }
    else if(predictions.length === 6){
      setWin(false);
      setQuizFinished(true);
    }  
  }

  const [allPlayers, setAllPlayers] = useState([])
  useEffect(() => {
    gameType === 'big5Teams' ? setAllPlayers(Big5Teams) : setAllPlayers(SuperLigTeams)
  }, [gameType])
  useEffect(() => {
    if(text.length > 0)
      setAnimationPrediction(false)
    if(text.length > 2){
      setPlayers(allPlayers.filter((player) => {
        let latinizedName = player.Name.toLowerCase();
        for (var interestingLetter in LatinizeLetters)
          latinizedName = latinizedName.replaceAll(interestingLetter, LatinizeLetters[interestingLetter]);
        return ( latinizedName.toLowerCase().includes(text.toLowerCase()));
      }))
    }
    else
      setPlayers([])
  }, [text])
  

  const handleShirtNo = (shirtNo, compareShirtNo) => {
    const realShirtNo = parseInt(shirtNo);
    const realCompareShirtNo = parseInt(compareShirtNo)
    const logo = realCompareShirtNo === realShirtNo ? null : (realCompareShirtNo > realShirtNo ? <BsArrowUp /> : <BsArrowDown />);
    return <div className="flex flex-row justify-center items-center"> #{shirtNo} {logo} </div>
  }

  const handleHeight = (height, compareHeight) => {
    const realHeight = parseFloat(height.substring(0, height.length-1).replace(',', '.'));
    const realCompareHeight = parseFloat(compareHeight.substring(0, compareHeight.length-1).replace(',', '.'));
    const logo = realCompareHeight === realHeight ? null : (realCompareHeight > realHeight ? <BsArrowUp /> : <BsArrowDown />);
    return <div className="flex flex-row justify-center items-center"> {height} {logo} </div>
  }

  const handleValue = (value, compareValue) => {
    let logo;
    if(value?.includes('m') && compareValue?.includes('k'))
      logo = <BsArrowDown />;
    else if(value?.includes('k') && compareValue?.includes('m'))
      logo = <BsArrowUp />;
    else{
      const val = parseFloat(value?.substring(1, value.length-1));
      const compareVal = parseFloat(compareValue.substring(1, compareValue.length-1));
      
      logo = compareVal === val ? null : (compareVal > val ? <BsArrowUp /> : <BsArrowDown />);
    }
    return <div className="flex flex-row justify-center items-center"> {value} {logo} </div>
  }

  const getAgeFromBirthDate = (birthDate) => {
    return parseInt(birthDate.substring(birthDate.indexOf('(')+1, birthDate.indexOf('(')+3));
  }
  const handleAge = (age, compareAge) => {
    const realAge = getAgeFromBirthDate(age);
    const realCompareAge = getAgeFromBirthDate(compareAge);
    const logo = realAge == realCompareAge ? null : (realCompareAge > parseInt(realAge) ? <BsArrowUp /> : <BsArrowDown />);
    return <div className="flex flex-row justify-center items-center"> {realAge} {logo} </div>
  }
  const handlePositionLogo = (position, size = 20) => {
    if(position.toLowerCase().includes('forward') || position.toLowerCase().includes('striker') || position.toLowerCase().includes('winger')){
      return <div className="flex flex-col justfiy-center items-center text-[12px]"><IoMdFootball size={size}/>Forward</div>;
    }
    else if(position.toLowerCase().includes('midfield')){
      return <div className="flex flex-col justfiy-center items-center text-[12px]"><BsArrowsMove size={size}/>Midfield</div>;
    }
    else if(position.toLowerCase().includes('keeper')){
      return <div className="flex flex-col justfiy-center items-center text-[12px]"><GiGoalKeeper size={size}/>Goalkeeper</div>;
    }
    else if(position.toLowerCase().includes('back')){
      return <div className="flex flex-col justfiy-center items-center text-[12px]"><GiCheckedShield size={size}/>Deffensive</div>;
    }
    else{
      return null;
    }
  }

  const handleColor = (actualValue, trueValue) => {
    return actualValue === trueValue ? ' bg-green ' : ' bg-red ';
  }

  const handlePositionColor = (actualPosition, truePosition) => {
    if((actualPosition.toLowerCase().includes('forward') || actualPosition.toLowerCase().includes('striker') || actualPosition.toLowerCase().includes('winger')) && (truePosition.toLowerCase().includes('forward') || truePosition.toLowerCase().includes('striker') || truePosition.toLowerCase().includes('winger')))
      return ' bg-green';
    else if((actualPosition.toLowerCase().includes('midfield')) && (truePosition.toLowerCase().includes('midfield') ))
      return ' bg-green';
    else if(actualPosition.toLowerCase().includes('keeper') && truePosition.toLowerCase().includes('keeper'))
      return ' bg-green';
    else if(actualPosition.toLowerCase().includes('back') && truePosition.toLowerCase().includes('back'))
      return ' bg-green';
    return ' bg-red';
  }

  const predictionBgColor = () => {
    const level = predictions.length;
    if(level < 4)
      return 'bg-green shadow-md shadow-green border-green';
    else if(level === 5)
      return 'bg-pink shadow-md shadow-pink border-pink';
    else
      return 'bg-red shadow-md shadow-red border-red';
  }

  return(
    <div className="relative min-h-[1000px] w-full text-siyah font-serif bg-gradient-to-r from-yesil to-mavi">
    <Navbar />
    <AlertItem quizFinished={quizFinished} win={win} player={comparePlayer} predict={`${predictions.length} / 7`} handlePositionLogo={handlePositionLogo}/>
    <TimeCounter />
    <div className="w-full h-[200px] flex flex-row justify-around max-md:h-[125px]">
      {gameType === 'superLig' ? <img src={LeagueLogos['Süper Lig']} alt='Süper Lig'/> : 
      <div className="m-4 p-4 flex flex-row">
        <img className="w-[100px] h-[120px] m-2 max-md:w-[60px] max-md:h-[60px]" src={LeagueLogos.Bundesliga} alt='Bundesliga'/>
        <img className="w-[100px] h-[120px] m-2 max-md:w-[60px] max-md:h-[60px]" src={LeagueLogos.Laliga} alt='Laliga'/>
        <img className="w-[100px] h-[120px] m-2 max-md:w-[60px] max-md:h-[60px]" src={LeagueLogos.Ligue1} alt='Ligue1'/>
        <img className="w-[100px] h-[120px] m-2 max-md:w-[60px] max-md:h-[60px]" src={LeagueLogos["Premier League"]} alt='Premier League'/>
        <img className="w-[100px] h-[120px] m-2 max-md:w-[60px] max-md:h-[60px]" src={LeagueLogos["Serie A"]} alt='Serie A'/>
      </div>}
    </div>
    <div className={`flex flex-col items-center ${quizFinished ? 'blur-md' : ''}`}>
      <div className='w-[500px] flex flex-col items-center max-md:w-[350px]'>
        <div className="w-full">
          <PredictionInput text={text} onChangeText={onChangeText} numberOfPredictions={predictions.length} totalPredictions={7} className='m-2'/>
          <ul className="max-h-[300px] overflow-y-auto">
          {players?.map((player) => {
            const teamLogo = Big6TeamsLogos[player.TeamName] ? <img src={Big6TeamsLogos[player.TeamName]} className='h-[50px] w-[50px]' alt={player.TeamName}/> : <>{player.TeamName}</>;
            
            let alreadyPredicted = false;
            predictions.map((predict) => {if(player === predict) alreadyPredicted = true})

            if(alreadyPredicted){
              return (
                <li className="flex justify-between items-center bg-red p-4 opacity-70 hover:cursor-pointer rounded-md m-3 shadow-md shadow-gri relative text-white">
                  <span className="absolute left-0 top-0 flex flex-row justify-center items-center"><MdOutlineDoNotDisturb />Predicted</span>
                  <span className="w-[150px] text-left">#{player.ShirtNo}</span>
                  <span className="w-[150px] text-left">{player.Name}</span>
                  {/* <span className="w-[150px] text-right">{player.TeamName}</span> */}                
                  <span className="w-[150px] text-right flex justify-end ">{teamLogo}</span>
              </li>
              )
            }
              return(
                <li onClick={() => handleAddNewPredict(player)} className="flex justify-between items-center bg-LightYesil p-4 hover:opacity-70 hover:cursor-pointer rounded-md m-3 shadow-md shadow-elifGri">
                  <span className="w-[150px] text-left">#{player.ShirtNo}</span>
                  <span className="w-[150px] text-left">{player.Name}</span>
                  {/* <span className="w-[150px] text-right">{player.TeamName}</span> */}
                  <span className="w-[150px] text-right flex justify-end">{teamLogo}</span>
                </li>
              )   
          })}
          </ul>
        </div>
        <div className={`${predictionBgColor()} flex justify-center items-center w-[200px] h-[80px] text-[24px] rounded-md`}>Predictions: {predictions.length} / 7</div>
        <ul className="m-4">
          {predictions.length > 0 ? 
             <li className="flex flex-row justify-between p-4 m-2 items-center text-center font-black text-white max-md:text-[8px]">
             <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">Shirt No</span>
             <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">Nationality</span>
             <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">Height</span>
             <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">Age</span>

             {gameType === 'big5Teams' ? 
              <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">League</span> :
              <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">Team</span>
              }
             
             <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">Position</span>
             <span className="w-[85px] flex justify-center shadow-md rounded-md bg-KoyuMavi max-md:w-[30px]">Value</span>
           </li> : ''  
        }
       
          {predictions.map((predict, index) => 
          {
          return(
            <div className="border-2 border-gri rounded-md p-2 m-2 bg-elifKoyuMavi text-white font-black">
            <h2 className="w-full text-center font-black">{predict.Name}</h2>
        {index === 0 && animationPrediction ? 
          <li>
            <TransitionGroup className="w-[650px] flex flex-row justify-between m-2 items-center text-center max-md:w-[300px] max-md:text-[8px]">
            <CSSTransition timeout={fadeDuration} classNames="fade">
              <FadeInDiv0><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] max-md:h- ${handleColor(predict.ShirtNo, comparePlayer?.ShirtNo)}`}>{handleShirtNo(predict.ShirtNo, comparePlayer?.ShirtNo)}</span></FadeInDiv0>
            </CSSTransition>
          
          
            <CSSTransition timeout={fadeDuration} classNames="fade">
              <FadeInDiv1><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.Country, comparePlayer?.Country)}`}>{<img src={CountryFlags[predict.Country]} alt={predict.Country} className='w-[60px] h-[40px]'/>}</span></FadeInDiv1>
            </CSSTransition>
          
          
            <CSSTransition timeout={fadeDuration} classNames="fade">
              <FadeInDiv2><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.Height, comparePlayer?.Height)}`}>{handleHeight(predict.Height, comparePlayer?.Height)}</span></FadeInDiv2>
            </CSSTransition>
          
          
            <CSSTransition timeout={fadeDuration} classNames="fade">
              <FadeInDiv3><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(getAgeFromBirthDate(predict.BirthDate), getAgeFromBirthDate(comparePlayer?.BirthDate))}`}>{handleAge(predict.BirthDate, comparePlayer?.BirthDate)}</span></FadeInDiv3>
            </CSSTransition>
          

            {gameType === 'big5Teams' ? 
            <CSSTransition timeout={fadeDuration} classNames="fade">
              <FadeInDiv4><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.LeagueName, comparePlayer?.LeagueName)}`}>{<img src={LeagueLogos[predict.LeagueName]} className='w-[50px] h-[50px]'/>}</span></FadeInDiv4>
            </CSSTransition> : 
             <CSSTransition timeout={fadeDuration} classNames="fade">
            <FadeInDiv4><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center ${handleColor(predict.TeamName, comparePlayer?.TeamName)}`}>{<img src={Big6TeamsLogos[predict.TeamName]} className='w-[50px] h-[50px]'/>}</span></FadeInDiv4>
            </CSSTransition>  /* team logos handle */
            }
            
          
          
            <CSSTransition timeout={fadeDuration} classNames="fade">
              <FadeInDiv5><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handlePositionColor(predict.Position, comparePlayer?.Position)}`}>{handlePositionLogo(predict.Position)}</span></FadeInDiv5>
            </CSSTransition>
          
          
            <CSSTransition timeout={fadeDuration} classNames="fade">
              <FadeInDiv6><span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.MarketValue, comparePlayer?.MarketValue)}`}>{handleValue(predict.MarketValue, comparePlayer?.MarketValue)}</span></FadeInDiv6>
            </CSSTransition>
            </TransitionGroup>
          </li>
          : 
          <li className="w-[650px] flex flex-row justify-between m-2 items-center text-center max-md:w-[300px] max-md:text-[8px]">
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.ShirtNo, comparePlayer?.ShirtNo)}`}>{handleShirtNo(predict.ShirtNo, comparePlayer?.ShirtNo)}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.Country, comparePlayer?.Country)}`}>{<img src={CountryFlags[predict.Country]} alt={predict.Country} className='w-[60px] h-[40px]'/>}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.Height, comparePlayer?.Height)}`}>{handleHeight(predict.Height, comparePlayer?.Height)}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(getAgeFromBirthDate(predict.BirthDate), getAgeFromBirthDate(comparePlayer?.BirthDate))}`}>{handleAge(predict.BirthDate, comparePlayer?.BirthDate)}</span>
              
              {gameType === 'big5Teams' ? 
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.LeagueName, comparePlayer?.LeagueName)}`}>{<img src={LeagueLogos[predict.LeagueName]} className='w-[50px] h-[50px]'/>}</span>
              : 
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.TeamName, comparePlayer?.TeamName)}`}>{<img src={Big6TeamsLogos[predict.TeamName]} className='w-[50px] h-[50px]'/>}</span> 
               }
              
              
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handlePositionColor(predict.Position, comparePlayer?.Position)}`}>{handlePositionLogo(predict.Position)}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center max-md:w-[30px] ${handleColor(predict.MarketValue, comparePlayer?.MarketValue)}`}>{handleValue(predict.MarketValue, comparePlayer?.MarketValue)}</span>
          </li>
      }
            </div>
          )
          }
          )}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default SoccerPlayerName;