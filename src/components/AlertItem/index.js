import React, { useState } from 'react';
import { LeagueLogos } from '../../teamDatas/Big6Teams';

const AlertItem = ({win, player, predict, handlePositionLogo}) => {
  const [show, setShow] = useState(true);
const [index, setIndex] = useState(0);
  function toggleShow() {
    setShow(!show);
  }

  const spans = [
    <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>#{player.ShirtNo}</span>,
    <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Country}</span>,
    <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Height}</span>,
    <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.BirthDate}</span>,
    <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{<img src={LeagueLogos[player.LeagueName]} className='w-[50px] h-[50px]'/>}</span>,
    <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{handlePositionLogo(player.Position)}</span>,
    <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.MarketValue}</span>,
    <h1>{player.Name}</h1>,
  ]

  const [spanContent, setSpanContent] = useState(<h1>"Initial Content"</h1>);
  const [showAllInfos, setShowAllInfos] = useState(false);
    const [end, setEnd] = useState(false); 
  React.useEffect(() => {
    if (show && !end) {
      setTimeout(() => {
        setIndex((index + 1) % 8);
        setSpanContent(spans[index])
      }, 1500); // change content after 1 second (1000ms)
    }
  }, [show, index]);

  React.useEffect(()=> {
    if(index === 7){
        setShowAllInfos(true);
        setEnd(true)
    }
  }, [index])

  /* return (
    <>
      <button onClick={toggleShow}>Show Alert</button>
      {show && (
        <div className={`alert w-[500px] h-[300px] bg-green absolute z-10 flex flex-col justify-center items-center`}>
            
          <span className="closebtn" onClick={toggleShow}>&times;</span>
          <strong>{win ? 'You Have Won' : 'You Lost'}</strong>
          <strong>{predict}</strong>
              <div>
              {spanContent}
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.ShirtNo}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Country}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Height}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.BirthDate}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{<img src={LeagueLogos[player.LeagueName]} className='w-[50px] h-[50px]'/>}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Position}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.MarketValue}</span>
              </div>
        </div>
      )}
    </>
  ); */
  return (
    <>
      <button className='w-[300px] h-[400px] bg-red' onClick={toggleShow}>Show Alert</button>
      {show && (
        <div className={`alert w-[800px] h-[400px] bg-acikMavi absolute top-1/4 z-10 flex flex-col justify-center items-center`}>
            
        <strong>{win ? 'You Have Won' : 'You Lost'}</strong>
        <strong>{predict}</strong>
            <div>
            {spanContent}
            </div>
        {showAllInfos && 
            <div>
                <li className="w-[650px] flex flex-row justify-between m-2 items-center text-center">
            <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.ShirtNo}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Country}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Height}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.BirthDate}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{<img src={LeagueLogos[player.LeagueName]} className='w-[50px] h-[50px]'/>}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.Position}</span>
              <span className={`rounded-md w-[85px] h-[60px] flex justify-center items-center bg-green`}>{player.MarketValue}</span>
                </li>
            </div>
        }

      </div>
      
      )}
    </>
  );
}

export default AlertItem;
