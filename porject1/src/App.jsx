import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './files/drum.jpg'

import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      const button = document.querySelector(`button[data-key="${key.charCodeAt(0)}"]`);
      if (button) {
        button.click();
        const audio = document.querySelector(`audio[data-key="${key.charCodeAt(0)}"]`);
        if (audio) {
          audio.currentTime = 0;
          audio.play();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);   
  }, []);
  useEffect(() => {
    const buttons = document.querySelectorAll('button[data-key]');
    buttons.forEach((button) => {
      const handleClick = () => {
        button.classList.add('active');
        setTimeout(() => {
          button.classList.remove('active');
        }, 1000);
      };
      button.addEventListener('click', handleClick);
    });
  }, []);
  return (
    <div
      className="bg-cover bg-center h-screen w-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <h1 className="text-4xl font-bold mb-6">Project 1: Drum Kit</h1>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        {[
          { key: 'A', label: 'CLAP', code: 65 },
          { key: 'S', label: 'HIHAT', code: 83 },
          { key: 'D', label: 'KICK', code: 68 },
          { key: 'F', label: 'OPENHAT', code: 70 },
          { key: 'G', label: 'BOOM', code: 71 },
          { key: 'H', label: 'RADE', code: 72 },
          { key: 'J', label: 'SNARE', code: 74 },
          { key: 'K', label: 'TOM', code: 75 },
          { key: 'L', label: 'RIDE', code: 76 },
        ].map(({ key, label, code }) => (
           <button 
              key={code}
              className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
              data-key={code}>
              <div>{key}</div>
              <div>{label}</div>
            </button>
        ))}
      </div>

      {/* Audio tags */}
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" data-key="65"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" data-key="83"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" data-key="68"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" data-key="70"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" data-key="71"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" data-key="72"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" data-key="74"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" data-key="75"></audio>
      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" data-key="76"></audio>
    </div>
  );
}

export default App;

