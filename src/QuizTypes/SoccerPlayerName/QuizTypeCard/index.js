import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import { LeagueLogos } from "../../../teamDatas/Big6Teams";

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
  return(
    <div className="w-full h-full bg-mavi slide-container flex-justify-center items-center p-4">
      <h1 className="text-center w-full text-[32px] text-gray-light border-2 border-gray-light">Find Me</h1>
      <Fade>
        {leagueLogos.map((fadeImage, index) => (
          <div key={index} className='w-full h-full flex flex-col justify-center items-center p-10'>
            <img style={{ maxWidth: '100%', height: '250px', alignSelf: 'center' }} src={fadeImage.url} />
            <h2 className='text-[32px] text-center text-gray-light p-4'>{fadeImage.caption}</h2>
            <Link className="rounded-md w-4/5 bg-gradient-to-r from-yesil to-mavi text-gray-light absolute bottom-0 text-center text-[32px] hover:opacity-70" to={`findMe/${fadeImage.link}`}>Play</Link>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SoccerPlayerNameCard;