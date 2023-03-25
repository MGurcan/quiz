import React from "react";
import { getDays, getHours } from "../components/TimeCounter";

import { bayern_munih } from './Bundesliga'; 
import { atletico_de_madrid, villarreal,real_betis,valencia,sevilla,athletic_bilbao } from "./LaLiga";
import { liverpool, chelsea, brentford, leeds,crystal_palace,bournemouth,aston_villa,fulham } from "./PremierLeague";
import { napoli, roma, milan,inter,fiorentina,torino,bologna, } from "./SerieA";
import { lyon, PSG,marseille } from "./Ligue1";
import { sivasspor, kasimpasa, fenerbahce, galatasaray, basaksehir, adana_demirspor, ankaragücü, alanyaspor, antalyaspor, besiktas, giresunspor } from "./SuperLig";

const quizPlayersBig5League = [

    /* {...roma[21], photo: 'https://gandalf.wlsrv.com:2083/cpsess0551444537/frontend/paper_lantern/filemanager/showfile.html?file=wijnaldum.jpg&fileop=&dir=%2Fhome%2Fmaniacgu%2Fpublic_html%2Fimages&dirop=&charset=&file_charset=&baseurl=&basedir='},
    {...leeds[0], photo: 'https://maniacguess.com/static/images/meslier.jpg'},
    {...marseille[3], photo: 'https://www.thesun.co.uk/wp-content/uploads/2022/09/23a41238-aa01-41db-aa27-a0d3ebb2c0f0.jpg'}, */
    {...real_betis[8], photo: 'https://maniacguess.com/static/images/laLiga/players/Nabil_Fekir.jpg'},
    {...valencia[23], photo: 'https://maniacguess.com/static/images/laLiga/players/Samu_Castillejo.jpg'},
    {...crystal_palace[9], photo: 'https://maniacguess.com/static/images/premierLeague/players/Eberechi_Eze.jpg'},
    {...bologna[30], photo: 'https://maniacguess.com/static/images/serieA/players/Marko_Arnautovic.jpg'},
    {...torino[11], photo: 'https://maniacguess.com/static/images/serieA/players/Aleksey_Miranchuk.jpg'},
    {...fiorentina[18], photo: 'https://maniacguess.com/static/images/serieA/players/Sofyan_Amrabat.jpg'},
    {...sevilla[3], photo: 'https://maniacguess.com/static/images/laLiga/players/Alex_Telles.jpg'},
    {...milan[7], photo: 'https://maniacguess.com/static/images/laLiga/players/Sandro_Tonali.jpg'},
    {...athletic_bilbao[23], photo: 'https://maniacguess.com/static/images/laLiga/players/Nico_Williams.jpg'},
    {...atletico_de_madrid[5], photo: 'https://maniacguess.com/static/images/laLiga/players/Axel_Witsel.jpg'},
    {...villarreal[4], photo: 'https://maniacguess.com/static/images/laLiga/players/Alberto_Moreno.jpg'},
    {...inter[2], photo: 'https://maniacguess.com/static/images/serieA/players/Alessandro_Bastoni.jpg'},
    {...roma[17], photo: 'https://maniacguess.com/static/images/serieA/players/Chris_Smalling.jpg'},
    {...bournemouth[16], photo: 'https://maniacguess.com/static/images/premierLeague/players/Ilya_Zabarnyi.png'},
    {...aston_villa[3], photo: 'https://maniacguess.com/static/images/premierLeague/players/Ezri_Konsa.jpg'},
    {...fulham[0], photo: 'https://maniacguess.com/static/images/premierLeague/players/Bernd_Leno.png'},
    {...liverpool[11], photo: 'https://maniacguess.com/static/images/premierLeague/players/Harvey_Elliott.jpg'},
    {...chelsea[11], photo: 'https://maniacguess.com/static/images/premierLeague/players/Kai_Havertz.png'},

];

const quizPlayersSuperLig = [

    {...adana_demirspor[11], photo: 'https://maniacguess.com/static/images/superLig/players/Yusuf_Sarı.jpg'},
    {...alanyaspor[2], photo: 'https://maniacguess.com/static/images/superLig/players/Fatih_Aksoy.jpg'},
    {...ankaragücü[3], photo: 'https://maniacguess.com/static/images/superLig/players/Atakan_Cankaya.jpg'},
    {...antalyaspor[27], photo: 'https://maniacguess.com/static/images/superLig/players/Doğukan_Sinik.jpg'},
    {...besiktas[8], photo: 'https://maniacguess.com/static/images/superLig/players/Gedson_Fernandes.jpg'},
];

export const quizPlayerBig5Leage = quizPlayersBig5League[getDays() % quizPlayersBig5League.length];
export const quizPlayerSuperLig = quizPlayersSuperLig[getDays() % quizPlayersSuperLig.length];
