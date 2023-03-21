import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { LeagueLogos } from '../../../teamDatas/Big6Teams';
import { Link } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';

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
  const description = <span className='p-4 absolute right-0 top-0 w-[200px] h-auto opacity-80 text-gray-light text-center bg-siyah z-10'>You need to find the player who has higher market value.</span>
  const [seeDescription, setSeeDescription] = React.useState(false);
  return (
    <div className="relative w-full h-full bg-yesil slide-container flex-justify-center items-center p-4">
      <div className="relative text-center w-full text-[32px] text-gray-light border-2 border-gray-light">
        <button className='absolute left-0 top-0' onClick={() => setSeeDescription(!seeDescription)}><GrCircleInformation /></button>
        <h1 >This or That</h1>
      </div>
      {seeDescription && description}
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
