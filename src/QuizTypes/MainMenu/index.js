import React from "react";
import { Navbar } from "../../components/Navbar";
import QuizTypeCard from "../QuizTypeCard";
import ThisOrThatCard from "../ThisOrThat/QuizTypeCard";
import SoccerPlayerNameCard from "../SoccerPlayerName/QuizTypeCard";

const MainMenu = () => {
/*   React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7830772496556012";
    script.async = true;
    document.body.appendChild(script);

    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []); */

  return(
    <>
      <div className="relative min-h-[1000px] w-full text-siyah font-serif bg-gradient-to-r from-yesil to-mavi">
        <Navbar />
{/*         <div className="absolute left-0 bottom-0 border-2 border-gray-light w-[300px] h-[700px]">
        </div>
        <div className="absolute right-0 bottom-0 border-2 border-gray-light w-[300px] h-[700px]">
        </div> */}
        <div className="w-full text-gray-light flex flex-col justify-center items-center">
        
          <div className="border-2 border-gray-light rounded-md p-4 m-4">
            <h1 className="text-gray-light text-[50px]">ManiacGuess</h1>
          </div>
          <ul className="flex flex-row justify-center items-center p-4">
            <li className="m-4">
              <QuizTypeCard item={<SoccerPlayerNameCard />} link={'/big5Teams'}/>
            </li>
            <li className="m-4">
              <QuizTypeCard item={<ThisOrThatCard />} link={'/thisOrThat'}/>
            </li>
          </ul>
        </div>
      </div>
      <div>

      </div>
{/*       <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-7830772496556012"
        data-ad-slot="2139187337"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins> */}
    </>
  );
};

export default MainMenu;