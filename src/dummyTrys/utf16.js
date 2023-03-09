import { BundesligaTeams } from "../teamDatas/Bundesliga.js";
import { LaLigaTeams } from "../teamDatas/LaLiga.js";
import { SuperLigTeams } from "../teamDatas/SuperLig.js";
import { SerieATeams } from "../teamDatas/SerieA.js";
import { Ligue1Teams } from "../teamDatas/Ligue1.js";
import { PremierLeagueTeams } from "../teamDatas/PremierLeague.js";
export const Utf16 = () => {
    console.log(BundesligaTeams)
    return(
        <>
            {PremierLeagueTeams.map((player) =><h2>{player.Name} {player['Shirt No']} </h2> )}
        </>
    );
};