import React from "react";
import PredictionInput from "../../components/PredictionInput";
import { BsArrowDown, BsArrowUp, BsArrowsMove } from 'react-icons/bs';
import { IoMdFootball } from 'react-icons/io';
import { GiGoalKeeper, GiCheckedShield } from 'react-icons/gi';
const SoccerPlayerName = () => {

  const [text, onChangeText] = React.useState('');
  const [players, setPlayers] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [predictions, setPredictions] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${text}`)
      .then(response => response.json())
      .then(data => {
        console.log("data: ", data.player)
        setPlayers(data.player);
        setIsLoading(false);
      })
      .catch(error => console.log(error));}, [text]);
    
      React.useEffect(() => {
        if(predictions.length >= 5){
          alert("YETER LAA KAC TANE DENİYON")
          setPredictions([]);
        }
      }, [predictions]);

  const handleAddNewPredict = (e) => {
    console.log(e);
    setPredictions([...predictions, e]);
  }


  const handleHeight = (height, compareHeight) => {
    const indexOfMeter = height.indexOf('m');
    const logo = compareHeight > parseFloat(height.substring(indexOfMeter-5, indexOfMeter-1)) ? <BsArrowUp /> : <BsArrowDown />;
    return <div className="flex flex-row justify-center items-center"> {height.substring(indexOfMeter-5, indexOfMeter+1)} {logo} </div>
  }

  const handleAge = (age, compareAge) => {
    const realAge = 2023 - parseInt(age.substring(0,4))
    const logo = compareAge > parseInt(realAge) ? <BsArrowUp /> : <BsArrowDown />;
    return <div className="flex flex-row justify-center items-center"> {realAge} {logo} </div>
  }
  const handlePositionLogo = (position) => {
    if(position.toLowerCase().includes('forward')){
      return <IoMdFootball size={35}/>;
    }
    else if(position.toLowerCase().includes('midfield')){
      return <BsArrowsMove size={35}/>;
    }
    else if(position.toLowerCase().includes('keeper')){
      return <GiGoalKeeper size={35}/>;
    }
    else if(position.toLowerCase().includes('back')){
      return <GiCheckedShield size={35}/>;
    }
    else{
      return null;
    }
  }

  const handleColor = (actualValue, trueValue) => {
    return actualValue === trueValue ? ' bg-green ' : ' bg-red ';
  }
  const teamLogos = 
    {
      'Manchester United': 'https://www.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png',
      'Liverpool': 'https://www.thesportsdb.com/images/media/team/badge/uvxuqq1448813372.png',
    'Bournemouth': 'https://www.thesportsdb.com/images/media/team/badge/y08nak1534071116.png',
    'Chelsea' :
'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png',
    'Leeds' :
'https://www.thesportsdb.com/images/media/team/badge/g0eqzw1598804097.png',
    'Wolves' :
'https://www.thesportsdb.com/images/media/team/badge/u9qr031621593327.png',
    'Arsenal' :
'https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png',
    'Brighton' :
'https://www.thesportsdb.com/images/media/team/badge/ywypts1448810904.png',
    'Fulham' :
'https://www.thesportsdb.com/images/media/team/badge/xwwvyt1448811086.png',
    'Southampton' :
'https://www.thesportsdb.com/images/media/team/badge/ggqtd01621593274.png',
    'Manchester City' :
'https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png',
    'Nottingham Forest' :
'https://www.thesportsdb.com/images/media/team/badge/bk4qjs1546440351.png',
    'Brentford' :
'https://www.thesportsdb.com/images/media/team/badge/grv1aw1546453779.png',
    'Everton' :
'https://www.thesportsdb.com/images/media/team/badge/eqayrf1523184794.png',
    'Leicester' :
'https://www.thesportsdb.com/images/media/team/badge/xtxwtu1448813356.png',
    'West Ham' :
'https://www.thesportsdb.com/images/media/team/badge/yutyxs1467459956.png',
    'Crystal Palace' :
'https://www.thesportsdb.com/images/media/team/badge/ia6i3m1656014992.png',
    'Aston Villa' :
'https://www.thesportsdb.com/images/media/team/badge/gp6hm41660559699.png',
    'Tottenham' :
'https://www.thesportsdb.com/images/media/team/badge/dfyfhl1604094109.png',
    'Newcastle' :
'https://www.thesportsdb.com/images/media/team/badge/lhwuiz1621593302.png',
  }

  return(
    <div className="min-h-[1000px] w-full flex justify-center bg-blue">
      <div className='w-[500px] flex flex-col items-center'>
        <div className="w-full">
          <PredictionInput text={text} onChangeText={onChangeText} className='m-2'/>
          <ul className="max-h-[300px] overflow-y-auto">
            {players?.map(player => teamLogos.hasOwnProperty(player.strTeam) && 
            <>
            
              <li onClick={() => handleAddNewPredict(player)} className="flex justify-between items-center bg-gray-light p-4 hover:opacity-70 hover:cursor-pointer">
                <span className="w-[150px] text-left"><img className="w-[50px] h-[50px]" src={teamLogos[player.strTeam]}/></span> 
                <span className="w-[150px] text-center">{player.strPlayer}</span>
                <span className="w-[150px] text-right">{player.strTeam}</span>
              </li>
              </>
              )}
          </ul>
        </div>

        <ul className="m-4 divide-y">
        <li className="w-[600px] flex flex-row justify-between m-2 items-center text-center">
            <span className="w-1/5 flex justify-center">TEAM</span>
            <span className="w-1/5 flex justify-center">FOOT</span>
            <span className="w-1/5 flex justify-center">HEIGHT</span>
            <span className="w-1/5 flex justify-center">AGE</span>
            <span className="w-1/5 flex justify-center">POSITION</span>
          </li>
          {predictions.map(predict =>
          <li className="w-[600px] flex flex-row justify-between m-2 items-center text-center">
            <span className={`w-1/5 h-[50px] flex justify-center items-center ${handleColor(predict.strTeam, 'Manchester United')}`}><img className="w-[50px] h-[50px] " src={teamLogos[predict.strTeam]}/></span>
            <span className={`w-1/5 h-[50px] flex justify-center items-center ${handleColor(predict.strTeam, 'left')}`}>{predict.strSide}</span>
            <span className={`w-1/5 h-[50px] flex justify-center items-center ${handleColor(predict.strHeight, '6 ft 4 in (1.94 m)')}`}>{handleHeight(predict.strHeight, 1.85)}</span>
            <span className={`w-1/5 h-[50px] flex justify-center items-center ${handleColor(predict.dateBorn, '1993-03-05')}`}>{handleAge(predict.dateBorn, 15)}</span>
            <span className={`w-1/5 h-[50px] flex justify-center items-center ${handleColor(predict.strPosition, 'Centre-Back')}`}>{handlePositionLogo(predict.strPosition)}</span>
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SoccerPlayerName;