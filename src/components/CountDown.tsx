'use client'
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeRemaining = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const updateTimer = () => {
      setTimeRemaining(calculateTimeRemaining);
    };

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='font-bold text-2xl md:text-4xl xl:text-5xl text-yellow-300'>
      {timeRemaining.days} : {timeRemaining.hours} : {timeRemaining.minutes} : {timeRemaining.seconds}
    </div>
  );
};

export default Countdown;
