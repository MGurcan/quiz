import React from "react";
import { getDays, getHours } from "../components/TimeCounter";

import { bayern_munih } from './Bundesliga'; 
import { atletico_de_madrid, villarreal } from "./LaLiga";
import { marseille } from "./Ligue1";
import { liverpool, chelsea } from "./PremierLeague";
import { napoli } from "./SerieA";
import { lyon, PSG } from "./Ligue1";
import { milan } from "./SerieA";
import { sivasspor, kasimpasa, fenerbahce, galatasaray, basaksehir, adana_demirspor, ankaragücü, alanyaspor, antalyaspor, besiktas } from "./SuperLig";
const quizPlayersBig5League = [
/*     {...bayern_munih[2], photo: 'https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_510,c_fill/q_auto/v1659953193/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/matthijs-de-ligt.png'},
    {...atletico_de_madrid[16], photo: 'https://img-estaticos.atleticodemadrid.com/system/fotos/13121/destacado_460x460/_0022_RECORTES_WEB_0003_DE-PAUL.png?1660404527'},
    {...marseille[17], photo: 'https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2022-2023/57/62557.jpg'},
    {...liverpool[12], photo: 'https://media02.tr.beinsports.com/img/players/P40083.png'},
    {...napoli[2], photo: 'https://www.footballdatabase.eu/images/photos/players/a_315/315243.jpg'},
    {...chelsea[8], photo: 'https://img.chelseafc.com//image/upload/f_auto,h_860,q_50/editorial/people/first-team/2022-23/04519_Play_Predictor_Header_3333x5000_Enzo.png'}, */

/*     {...lyon[22], photo: 'https://media02.tr.beinsports.com/img/players/P1533.png'},
    {...milan[27], photo: 'https://media02.tr.beinsports.com/img/players/P13216.png'}, */

    {...bayern_munih[7], photo: 'https://media02.tr.beinsports.com/img/players/P240.png'},
    {...PSG[12], photo: 'https://media02.tr.beinsports.com/img/players/P71989.png'},
    {...villarreal[20], photo: 'https://media02.tr.beinsports.com/img/players/P12173.png'},
];

const quizPlayersSuperLig = [
/*     {...sivasspor[10], photo: 'https://media02.tr.beinsports.com/img/players/P2016.png'},
    {...kasimpasa[5], photo: 'https://media02.tr.beinsports.com/img/players/P2601.png'},
    {...fenerbahce[7], photo: 'https://media02.tr.beinsports.com/img/players/P70692.png'},
    {...galatasaray[24], photo: 'https://pbs.twimg.com/media/FoXewzBXgAM5TJl?format=jpg&name=large'},
    {...basaksehir[5], photo: 'https://media02.tr.beinsports.com/img/players/P5416.png'},
    {...chelsea[8], photo: 'https://img.chelseafc.com//image/upload/f_auto,h_860,q_50/editorial/people/first-team/2022-23/04519_Play_Predictor_Header_3333x5000_Enzo.png'}, */

/*     {...adana_demirspor[8], photo: 'https://media02.tr.beinsports.com/img/players/P2737.png'},
    {...ankaragücü[13], photo: 'https://media02.tr.beinsports.com/img/players/P5407.png'}, */

    {...alanyaspor[12], photo: 'https://media02.tr.beinsports.com/img/players/P7039.png'},
    {...antalyaspor[30], photo: 'https://media02.tr.beinsports.com/img/players/P26074.png'},
    {...besiktas[23], photo: 'https://media02.tr.beinsports.com/img/players/P4936.png'},
];

export const quizPlayerBig5Leage = quizPlayersBig5League[getDays() % quizPlayersBig5League.length];
export const quizPlayerSuperLig = quizPlayersSuperLig[getDays() % quizPlayersSuperLig.length];
