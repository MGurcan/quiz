import React, { useState, useEffect } from 'react';

export const getHours = () => {
    return Math.floor((Date.now() / 1000) / (60 * 60)) % 24;
}
export const getMinutes = () => {
    return Math.floor((Date.now() / 1000) / 60) % 60;
}
export const getSeconds = () => {
    return Math.floor((Date.now() / 1000) % 60);
}
function TimeCounter() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const timeDifference = currentTime / 1000;
  const seconds = Math.floor(timeDifference % 60);
  const minutes = Math.floor(timeDifference / 60) % 60;
  const hours = Math.floor(timeDifference / (60 * 60)) % 24;
  //const days = Math.floor(timeDifference / (60 * 60 * 24));

  return (
    <div className='border border-gray-light w-[300px] flex flex-col justify-center items-center p-3 text-gray-light'>
      <h1>Until New Player</h1>
      <div className='flex flex-row p-2'>
        <p className='p-2'>{11-hours} Hours</p>
        <p className='p-2'>{59-minutes} Minutes</p>
        <p className='p-2'>{59-seconds} Seconds</p>
      </div>
    </div>
  );
  
}

export default TimeCounter;
