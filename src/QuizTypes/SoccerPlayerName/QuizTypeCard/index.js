import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import { LeagueLogos } from "../../../teamDatas/Big6Teams";
import { GrCircleInformation } from 'react-icons/gr';

const SoccerPlayerNameCard = () => {
  const leagueLogos = [
    {
      url: LeagueLogos.Big5Logos,
      caption: 'Big 5 Leagues',
      link: 'big5Teams'
    },
    {
      url: LeagueLogos["Süper Lig"],
      caption: 'Super Lig',
      link: 'superLig'
    },
  ];
  const description = <span className='p-4 absolute right-0 top-0 w-[200px] h-auto opacity-80 text-gray-light text-center bg-siyah z-10'>You will have 7 chances to find the player according to your predictions.</span>
  const [seeDescription, setSeeDescription] = React.useState(false);
  return(
    <div className="w-full h-full bg-mavi slide-container flex-justify-center items-center p-4">
      <div className="relative text-center w-full text-[32px] text-gray-light border-2 border-gray-light max-md:text-[20px]">
        <button className='absolute left-0 top-0' onClick={() => setSeeDescription(!seeDescription)}><GrCircleInformation /></button>
        <h1 >Find Me</h1>
      </div>
      {seeDescription && description}
      <Fade>
        {leagueLogos.map((fadeImage, index) => (
          <div key={index} className='w-full h-full flex flex-col justify-center items-center'>
            <img style={{ maxWidth: '100%', maxHeight: '200px', alignSelf: 'center', margin: '20px' }} src={fadeImage.url} alt={fadeImage.caption}/>
            <h2 className='text-[32px] text-center text-gray-light p-4 max-md:text-[20px] max-md:p-0'>{fadeImage.caption}</h2>
            <Link className="rounded-md w-4/5 bg-gradient-to-r from-yesil to-mavi text-gray-light text-center text-[32px] mt-4 hover:opacity-70 max-md:text-[20px]" to={`findMe/${fadeImage.link}`}>Play</Link>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SoccerPlayerNameCard;