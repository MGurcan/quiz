import React from "react";

const QuizTypeCard = ({ item }) => {
  return(
    <>
      <div className='relative w-[300px] h-[500px] flex flex-row items-center justify-center border-2 border-gray-light rounded-md max-md:w-[200px] max-md:h-[400px]'>
        {item}
      </div>
    </>
  );
};

export default QuizTypeCard;