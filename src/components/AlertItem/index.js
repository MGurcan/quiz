import React, { useState } from 'react';
import { LeagueLogos } from '../../teamDatas/Big6Teams';
import { Big6TeamsLogos } from '../../teamDatas/Big6Teams';
import {VscRefresh} from 'react-icons/vsc'
import { CountryFlags } from '../../teamDatas/Country';

const AlertItem = ({win, player, predict, handlePositionLogo, quizFinished}) => {

const [index, setIndex] = useState(0);

  const spans = [
    <span className={`rounded-md w-[185px] h-[160px] flex justify-center items-center ${win ? 'bg-green' : 'bg-gray-light'} text-[32px]`}>#{player.ShirtNo}</span>,
    <span className={`rounded-md w-[185px] h-[160px] flex justify-center items-center ${win ? 'bg-green' : 'bg-gray-light'} text-[32px]`}>{<img src={CountryFlags[player.Country]} alt={player.Country} className='w-[120px] h-[80px]'/>}</span>,
    <span className={`rounded-md w-[185px] h-[160px] flex justify-center items-center ${win ? 'bg-green' : 'bg-gray-light'} text-[32px]`}>{player.Height}</span>,
    <span className={`rounded-md w-[185px] h-[160px] flex justify-center items-center ${win ? 'bg-green' : 'bg-gray-light'} text-[32px] text-center`}>{player.BirthDate}</span>,
    <span className={`rounded-md w-[185px] h-[160px] flex justify-center items-center ${win ? 'bg-green' : 'bg-gray-light'} text-[32px]`}>{<img src={LeagueLogos[player.LeagueName]} className='w-[100px] h-[100px]'/>}</span>,
    <span className={`rounded-md w-[185px] h-[160px] flex justify-center items-center ${win ? 'bg-green' : 'bg-gray-light'} text-[32px]`}>{handlePositionLogo(player.Position, 40)}</span>,
    <span className={`rounded-md w-[185px] h-[160px] flex justify-center items-center ${win ? 'bg-green' : 'bg-gray-light'} text-[32px]`}>{player.MarketValue}</span>,
  ]

  const [showAllInfos, setShowAllInfos] = useState(false);
  const [end, setEnd] = useState(false); 

  React.useEffect(() => {
    if (quizFinished && !end) {
      setTimeout(() => {
        setIndex((index + 1) % 8);
      }, 500); // change content after 1 second (1000ms)
    }
  }, [quizFinished, index]);

  React.useEffect(()=> {
    setShowAllInfos(false);
    setIndex(0);
    setEnd(false);
  }, [player]);

  React.useEffect(()=> {
    if(index === 7){
        setShowAllInfos(true);
        setEnd(true)
    }
  }, [index])

  return (
    <>
      {quizFinished && (
        <>
      
    <div className={`alert w-[800px] h-[400px] bg-gradient-to-r ${win ? 'from-green' : 'from-red'} to-siyah absolute left-0 right-0 ml-auto mr-auto top-1/4 z-10 flex flex-col justify-center items-center shadow-md rounded-xl max-md:w-[300px] max-md:h-[180px]`}>
    {!showAllInfos ? 
        <div >
            {spans[index]}
        </div> :
        <>
        <div className='w-full flex flex-row justify-around items-center px-16 max-md:px-4'>
            <div className='w-[250px] text-[24px] text-gray-light flex flex-col justify-center items-center max-md:w-[120px] '> 
                <img className='rounded-md max-w-[250px] max-h-[250px] max-md:max-w-[120px] max-md:max-h-[120px]' src={player.photo}/>
            </div>
            <div className='w-[180px] text-[24px] text-gray-light flex flex-col justify-center items-center text-center max-md:w-[130px] max-md:text-[12px]'> 
                <strong >{win ? 'You Won!' : 'You Lost!'}</strong>
                <strong>{predict}</strong>
                <strong>{player.Name}</strong>
            </div>
        </div>


            <div>
                <li className="w-[650px] flex flex-row justify-between m-2 items-center text-center max-md:w-[280px]">
            <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-gray-light max-md:w-1/6`}>#{player.ShirtNo}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-gray-light max-md:w-1/6`}>{<img src={CountryFlags[player.Country]} alt={player.Country} className='w-[60px] h-[40px]'/>}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-gray-light max-md:w-1/6`}>{<img src={LeagueLogos[player.LeagueName]} className='w-[50px] h-[50px]'/>}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-gray-light max-md:w-1/6`}>{<img src={Big6TeamsLogos[player.TeamName]} className='w-[50px] h-[50px]'/>}</span>
                </li>
            </div>
            <button className='absolute right-4 top-4' onClick={() => window.location.reload(false)}><VscRefresh size={30} color='white'/></button>
        </>
        }
    </div>
      </>
      
      )}
    </>
  );
}

export default AlertItem;
