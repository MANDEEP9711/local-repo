import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './files/image.png'

import React, { useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hourDeg = (hours % 12) * 30 + minutes * 0.5 - 90; // 360 / 12 = 30 degrees per hour, plus minute adjustment
  const minuteDeg = minutes * 6 + seconds * 0.1 - 90; // 360 / 60 = 6 degrees per minute, plus second adjustment
  const secondDeg = seconds * 6 - 90; // 360 / 60 = 6 degrees per second
  const clockStyle = {
    transform: `rotate(${hourDeg}deg)`,
  };
  const minuteStyle = {
    transform: `rotate(${minuteDeg}deg)`,
  };
  const secondStyle = {
    transform: `rotate(${secondDeg}deg)`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const clockNumbers = [12,1,2,3,4,5,6,7,8,9,10,11];
  return (
    <div 
    className='bg-cover bg-center h-screen flex flex-col items-center justify-center'
    style={{ backgroundImage: `url(${logo})` }}>
      <h1 className="text-center text-2xl font-bold mt-4 text-amber-50">Analog Clock</h1>
      <div className="clock-container flex justify-center items-center h-screen">
        <div className="clock relative w-70 h-70 rounded-full border-8 border-black flex items-center justify-center bg-red-200">
          {/* Clock numbers */}
          {clockNumbers.map((num, i) => {
            const angle = i * 30; // 360 / 12
            return (
              <div
                key={num}
                className="number absolute text-gray-700 font-bold text-xl"
                style={{
                  transform: `rotate(${angle}deg) translateY(-110px) rotate(-${angle}deg)`,
                  //transformOrigin: 'center center',
                }}
              >
                {num}
              </div>
            );
          })}

          {/* Clock hands */}
          <div className='absolute hand hour-hand bg-gray-600 w-25 h-2 top-[50%] left-[50%]' style={clockStyle}></div>
          <div className='absolute hand minute-hand bg-gray-600 w-24 h-1.5 top-[50%] left-[50%]' style={minuteStyle}></div>
          <div className='absolute hand second-hand bg-red-500 w-28 h-1 top-[50%] left-[50%]' style={secondStyle}></div>
          <div className='absolute text-center top-[50%] left-[20%] w-15 h-12 rounded-xl bg-green-100'>{time.toLocaleTimeString()}</div>
       </div>
      </div>

    </div>
  );
}

export default App;

