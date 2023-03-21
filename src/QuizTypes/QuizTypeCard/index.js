import React from "react";

const QuizTypeCard = ({ item }) => {
  return(
    <>
    <div className='relative w-[300px] h-[600px] flex flex-row items-center justify-center border-2 border-gray-light '>
      {item}
    </div>
    </>
  );
};

export default QuizTypeCard;