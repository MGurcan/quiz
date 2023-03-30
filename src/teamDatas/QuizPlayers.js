import React from "react";
import { getDays } from "../components/TimeCounter";

import { bayern_munih, leipzig,borussia_dortmund } from './Bundesliga'; 
import { atletico_de_madrid, villarreal, real_betis, valencia, sevilla, athletic_bilbao } from "./LaLiga";
import { liverpool, chelsea, crystal_palace, bournemouth, aston_villa, fulham } from "./PremierLeague";
import { roma, milan,inter,fiorentina,torino,bologna } from "./SerieA";
import { PSG, monaco, lens, lille, nice, stade_reims } from "./Ligue1";
import { fenerbahce, galatasaray, basaksehir, adana_demirspor, ankaragücü, alanyaspor, antalyaspor, besiktas, karagümrük } from "./SuperLig";

const quizPlayersBig5League = [

    {...real_betis[8], photo: 'https://maniacguess.com/static/images/laLiga/players/Nabil_Fekir.jpg'},
    {...valencia[23], photo: 'https://maniacguess.com/static/images/laLiga/players/Samu_Castillejo.jpg'},
    {...crystal_palace[9], photo: 'https://maniacguess.com/static/images/premierLeague/players/Eberechi_Eze.jpg'},
    {...monaco[22], photo: 'https://maniacguess.com/static/images/ligue1/players/Aleksandr_Golovin.jpg'},
    {...bologna[30], photo: 'https://maniacguess.com/static/images/serieA/players/Marko_Arnautovic.jpg'},
    {...leipzig[3], photo: 'https://maniacguess.com/static/images/bundesliga/players/Josko_Gvardiol.png'},
    {...villarreal[4], photo: 'https://maniacguess.com/static/images/laLiga/players/Alberto_Moreno.jpg'},
    {...liverpool[11], photo: 'https://maniacguess.com/static/images/premierLeague/players/Harvey_Elliott.jpg'},
    {...torino[11], photo: 'https://maniacguess.com/static/images/serieA/players/Aleksey_Miranchuk.jpg'},
    {...lille[6], photo: 'https://maniacguess.com/static/images/ligue1/players/Andre_Gomes.jpg'},
    {...fiorentina[18], photo: 'https://maniacguess.com/static/images/serieA/players/Sofyan_Amrabat.jpg'},
    {...sevilla[3], photo: 'https://maniacguess.com/static/images/laLiga/players/Alex_Telles.jpg'},
    {...lens[8], photo: 'https://maniacguess.com/static/images/ligue1/players/Seko_Fofana.jpg'},
    {...bayern_munih[8], photo: 'https://maniacguess.com/static/images/bundesliga/players/Ryan_Gravenberch.jpg'},
    {...milan[7], photo: 'https://maniacguess.com/static/images/laLiga/players/Sandro_Tonali.jpg'},
    {...athletic_bilbao[23], photo: 'https://maniacguess.com/static/images/laLiga/players/Nico_Williams.jpg'},
    {...nice[10], photo: 'https://maniacguess.com/static/images/ligue1/players/Sofiane_Diop.png'},
    {...atletico_de_madrid[5], photo: 'https://maniacguess.com/static/images/laLiga/players/Axel_Witsel.jpg'},
    {...inter[2], photo: 'https://maniacguess.com/static/images/serieA/players/Alessandro_Bastoni.jpg'},
    {...borussia_dortmund[15], photo: 'https://maniacguess.com/static/images/bundesliga/players/Sebastien_Haller.png'},
    {...PSG[8], photo: 'https://maniacguess.com/static/images/ligue1/players/Vitinha.jpg'},
    {...leipzig[23], photo: 'https://maniacguess.com/static/images/bundesliga/players/Dani_Olmo.jpg'},
    {...roma[17], photo: 'https://maniacguess.com/static/images/serieA/players/Chris_Smalling.jpg'},
    {...bournemouth[16], photo: 'https://maniacguess.com/static/images/premierLeague/players/Ilya_Zabarnyi.png'},
    {...aston_villa[3], photo: 'https://maniacguess.com/static/images/premierLeague/players/Ezri_Konsa.jpg'},
    {...borussia_dortmund[8], photo: 'https://maniacguess.com/static/images/bundesliga/players/Salih_Özcan.jpg'},
    {...fulham[0], photo: 'https://maniacguess.com/static/images/premierLeague/players/Bernd_Leno.png'},
    {...stade_reims[20], photo: 'https://maniacguess.com/static/images/ligue1/players/Folarin_Balogun.jpg'},
    {...chelsea[11], photo: 'https://maniacguess.com/static/images/premierLeague/players/Kai_Havertz.png'},
    {...bayern_munih[3], photo: 'https://maniacguess.com/static/images/bundesliga/players/Lucas_Hernandez.png'},


];

const quizPlayersSuperLig = [

    {...adana_demirspor[11], photo: 'https://maniacguess.com/static/images/superLig/players/Yusuf_Sarı.jpg'},
    {...alanyaspor[2], photo: 'https://maniacguess.com/static/images/superLig/players/Fatih_Aksoy.jpg'},
    {...ankaragücü[3], photo: 'https://maniacguess.com/static/images/superLig/players/Atakan_Cankaya.jpg'},
    {...antalyaspor[27], photo: 'https://maniacguess.com/static/images/superLig/players/Doğukan_Sinik.jpg'},
    {...besiktas[8], photo: 'https://maniacguess.com/static/images/superLig/players/Gedson_Fernandes.jpg'},
    {...adana_demirspor[4], photo: 'https://maniacguess.com/static/images/superLig/players/Jonas_Svensson.jpg'},
    {...alanyaspor[18], photo: 'https://maniacguess.com/static/images/superLig/players/Khadim_Rassoul.png'},
    {...basaksehir[22], photo: 'https://maniacguess.com/static/images/superLig/players/Lucas_Biglia.jpg'},
    {...galatasaray[8], photo: 'https://maniacguess.com/static/images/superLig/players/Fredrik_Midtsjo.jpg'},
    {...adana_demirspor[26], photo: 'https://maniacguess.com/static/images/superLig/players/David_Akintola.jpg'},
    {...fenerbahce[26], photo: 'https://maniacguess.com/static/images/superLig/players/Joshua_King.png'},
    {...galatasaray[17], photo: 'https://maniacguess.com/static/images/superLig/players/Kaan_Ayhan.jpg'},
    {...adana_demirspor[13], photo: 'https://maniacguess.com/static/images/superLig/players/Fredrik_Gulbrandsen.jpg'},
    {...alanyaspor[6], photo: 'https://maniacguess.com/static/images/superLig/players/Pedro_Pereira.jpg'},
    {...antalyaspor[19], photo: 'https://maniacguess.com/static/images/superLig/players/Veysel_Sarı.jpg'},
    {...karagümrük[0], photo: 'https://maniacguess.com/static/images/superLig/players/Batuhan_Şen.jpg'},
    {...alanyaspor[29], photo: 'https://maniacguess.com/static/images/superLig/players/Erencan_Yardımcı.png'},
    {...ankaragücü[0], photo: 'https://maniacguess.com/static/images/superLig/players/Gökhan_Akkan.png'},
    {...galatasaray[11], photo: 'https://maniacguess.com/static/images/superLig/players/Barış_Alper_Yılmaz.jpg'},
    {...ankaragücü[11], photo: 'https://maniacguess.com/static/images/superLig/players/Giorgi_Beridze.jpg'},
    {...antalyaspor[3], photo: 'https://maniacguess.com/static/images/superLig/players/Ömer_Toprak.jpg'},
    {...fenerbahce[2], photo: 'https://maniacguess.com/static/images/superLig/players/Luan_Peres.png'},
    {...basaksehir[24], photo: 'https://maniacguess.com/static/images/superLig/players/Deniz_Türüç.jpg'},
    {...antalyaspor[13], photo: 'https://maniacguess.com/static/images/superLig/players/Alassane_Ndao.jpg'},
    {...basaksehir[26], photo: 'https://maniacguess.com/static/images/superLig/players/Adnan_Januzaj.png'},
    {...karagümrük[25], photo: 'https://maniacguess.com/static/images/superLig/players/Lobjanidze.jpg'},
    {...fenerbahce[4], photo: 'https://maniacguess.com/static/images/superLig/players/Lincoln_Henrique.jpg'},    
  
];

export const quizPlayerBig5Leage = quizPlayersBig5League[getDays() % quizPlayersBig5League.length];
export const quizPlayerSuperLig = quizPlayersSuperLig[getDays() % quizPlayersSuperLig.length];
