import React from "react";
import { Link } from "react-router-dom";

const QuizTypeCard = ({gameName, link, description }) => {
  return(
    <>
    <Link to={link}>
      <div className="w-[300px] h-[500px] flex flex-row items-center justify-center border-2 border-gray-light hover:opacity-70">
        <span className="text-[32px]">{gameName}</span>
        <span className="text-[14px]">{description}</span>
      </div>
    </Link>
    </>
  );
};

export default QuizTypeCard;