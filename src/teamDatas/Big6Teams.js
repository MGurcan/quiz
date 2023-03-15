import { BundesligaTeams, BundesligaTeamLogos } from "./Bundesliga";
import { LaligaTeams, LaligaTeamLogos } from "./LaLiga";
import { Ligue1Teams, Ligue1TeamLogos } from "./Ligue1";
import { PremierLeagueTeams, PremierLeagueTeamLogos } from "./PremierLeague";
import { SerieATeams, SerieATeamLogos } from "./SerieA";
import { SuperLigTeamLogos } from "./SuperLig";

export const Big5Teams = Array.prototype.concat(BundesligaTeams, LaligaTeams, Ligue1Teams, PremierLeagueTeams, SerieATeams);

export const Big6TeamsLogos = {...PremierLeagueTeamLogos, ...BundesligaTeamLogos, ...LaligaTeamLogos, ...Ligue1TeamLogos, ...SerieATeamLogos, ...SuperLigTeamLogos}

export const LeagueLogos = {
    /* 'Bundesliga' : 'https://www.thesportsdb.com/images/media/league/badge/0j55yv1534764799.png', */
    'Bundesliga' : 'https://drive.google.com/uc?export=view&id=1kPIjTdMZ0XhtEo4PAMWNed2sXsvYk81v',
    /* 'Laliga' : 'https://www.thesportsdb.com/images/media/league/badge/7onmyv1534768460.png', */
    'Laliga' : 'https://drive.google.com/uc?export=view&id=1Urg5eCAvNpSEV_52RwUgz3jtcwbd2g5L',
    /* 'Ligue1': 'https://www.thesportsdb.com/images/media/league/badge/2yo0vn1592927519.png', */
    'Ligue1' : 'https://drive.google.com/uc?export=view&id=1DSe9JVKVkaFkOmvCk2M1wrhIgUdXqH4d',
    /* 'Premier League' : 'https://www.thesportsdb.com/images/media/league/badge/pdd43f1610891709.png', */
    'Premier League' : 'https://drive.google.com/uc?export=view&id=1SjWP-Zw6xVhSX13HEv6MbO3sGpFNAyh_',
    /* 'Serie A' : 'https://www.thesportsdb.com/images/media/league/badge/fy79v91625170070.png', */
    'Serie A' : 'https://drive.google.com/uc?export=view&id=1BIz7QreVP2jWw2aftTOtAiFEbiJwW2it',
   /*  'S\u00fcper Lig' : 'https://www.thesportsdb.com/images/media/league/badge/h7xx231601671132.png', */
    'S\u00fcper Lig' : 'https://drive.google.com/uc?export=view&id=1HMDUZqW5OA38oySSvp2TvPI1UhVkZE3h',
    
}