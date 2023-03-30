import { BundesligaTeams, BundesligaTeamLogos } from "./Bundesliga";
import { LaligaTeams, LaligaTeamLogos } from "./LaLiga";
import { Ligue1Teams, Ligue1TeamLogos } from "./Ligue1";
import { PremierLeagueTeams, PremierLeagueTeamLogos } from "./PremierLeague";
import { SerieATeams, SerieATeamLogos } from "./SerieA";
import { SuperLigTeamLogos } from "./SuperLig";

export const Big5Teams = Array.prototype.concat(BundesligaTeams, LaligaTeams, Ligue1Teams, PremierLeagueTeams, SerieATeams);

export const Big6TeamsLogos = {...PremierLeagueTeamLogos, ...BundesligaTeamLogos, ...LaligaTeamLogos, ...Ligue1TeamLogos, ...SerieATeamLogos, ...SuperLigTeamLogos}

export const LeagueLogos = {
  'Bundesliga' : 'https://maniacguess.com/static/images/leagueLogos/bundesliga.jpg',
  'Laliga' : 'https://maniacguess.com/static/images/leagueLogos/laLiga.png',
  'Ligue1' : 'https://maniacguess.com/static/images/leagueLogos/ligue1.png',
  'Premier League' : 'https://maniacguess.com/static/images/leagueLogos/premierLeague.png',
  'Serie A' : 'https://maniacguess.com/static/images/leagueLogos/serieA.png',
  'S\u00fcper Lig' : 'https://maniacguess.com/static/images/leagueLogos/superLig.png',
  'Big5Logos' : 'https://maniacguess.com/static/images/leagueLogos/big5Logos.jpg'
}