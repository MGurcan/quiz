import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { LeagueLogos } from '../../../teamDatas/Big6Teams';
import { Link } from 'react-router-dom';

const leagueLogos = [
  {
    url: LeagueLogos['Süper Lig'],
    caption: 'Süper Lig',
    link: 'superLig'
  },
  {
    url: LeagueLogos.Bundesliga,
    caption: 'Bundesliga',
    link: 'bundesliga'
  },
  {
    url: LeagueLogos.Laliga,
    caption: 'LaLiga',
    link: 'laLiga'
  },
  {
    url: LeagueLogos.Ligue1,
    caption: 'Ligue 1',
    link: 'ligue1'
  },
  {
    url: LeagueLogos['Premier League'],
    caption: 'Premier League',
    link: 'premierLeague'
  },
  {
    url: LeagueLogos['Serie A'],
    caption: 'Serie A',
    link: 'serieA'
  }
];

const ThisOrThatCard = () => {
  return (
    <div className="w-full h-full bg-yesil slide-container flex-justify-center items-center p-4">
      <h1 className="text-center w-full text-[32px] text-gray-light border-2 border-gray-light">This or That</h1>
      <Fade>
        {leagueLogos.map((fadeImage, index) => (
          <div key={index} className='w-full h-full flex flex-col justify-center items-center p-10'>
            <img style={{ maxWidth: '100%', height: '250px', alignSelf: 'center' }} src={fadeImage.url} />
            <h2 className='text-[32px] text-center text-gray-light p-4'>{fadeImage.caption}</h2>
            <Link className="rounded-md w-4/5 bg-gradient-to-r from-yesil to-mavi text-gray-light absolute bottom-0 text-center text-[32px] hover:opacity-70" to={`thisOrThat/${fadeImage.link}`}>Play</Link>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default ThisOrThatCard;
