import { BundesligaTeams, BundesligaTeamLogos } from "./Bundesliga";
import { LaligaTeams, LaligaTeamLogos } from "./LaLiga";
import { Ligue1Teams, Ligue1TeamLogos } from "./Ligue1";
import { PremierLeagueTeams, PremierLeagueTeamLogos } from "./PremierLeague";
import { SerieATeams, SerieATeamLogos } from "./SerieA";

export const Big6Teams = Array.prototype.concat(BundesligaTeams, LaligaTeams, Ligue1Teams, PremierLeagueTeams, SerieATeams);


export const Big6TeamsLogos = {...PremierLeagueTeamLogos, ...BundesligaTeamLogos, ...LaligaTeamLogos, ...Ligue1TeamLogos, ...SerieATeamLogos}

export const LeagueLogos = {
    'Bundesliga' : 'https://www.thesportsdb.com/images/media/league/badge/0j55yv1534764799.png',
    'Laliga' : 'https://www.thesportsdb.com/images/media/league/badge/7onmyv1534768460.png',
    'Ligue1': 'https://www.thesportsdb.com/images/media/league/badge/2yo0vn1592927519.png',
    'Premier League' : 'https://www.thesportsdb.com/images/media/league/badge/pdd43f1610891709.png',
    'Serie A' : 'https://www.thesportsdb.com/images/media/league/badge/fy79v91625170070.png',
}