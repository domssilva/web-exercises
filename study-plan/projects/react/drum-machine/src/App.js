import React, { useState } from 'react';

import './App.css';

import Display from './components/Display';
import Drumpad from './components/Drumpad';

function App() {

  const [audioDescription, setAudioDescription] = useState('');

  const drumpadData = [
    {
      keyCode: 81,
      keyLetter: 'Q',
      description: 'Heater-1',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      keyCode: 87,
      keyLetter: 'W',
      description: 'Heater-2',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      keyCode: 69,
      keyLetter: 'E',
      description: 'Heater-3',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      keyCode: 65,
      keyLetter: 'A',
      description: 'Heater-4',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      keyCode: 83,
      keyLetter: 'S',
      description: 'Clap',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      keyCode: 68,
      keyLetter: 'D',
      description: 'Open-HH',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      keyCode: 90,
      keyLetter: 'Z',
      description: 'Kick-n\' Hat',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      keyCode: 88,
      keyLetter: 'X',
      description: 'Kick',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      keyCode: 67,
      keyLetter: 'C',
      description: 'Snare',
      audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    },
  ];

  const handleClickOrKeydown = (event) => {
    let padData;

    if (event.type === 'click') {
      if (event.target.className === 'drum-pad') {
        [padData] = drumpadData.filter(obj => obj.description === event.target.id);
      }

    } else if (event.type === 'keydown') {
      [padData] = drumpadData.filter(obj => obj.keyCode === event.keyCode);
    }

    if (padData) {
      // play sound
      playSound(padData.keyLetter);
      // update the display
      setAudioDescription(padData.description);
    }
  }

  const playSound = keyLetter => {
    let sound = document.getElementById(keyLetter);
    sound.currentTime = 0;
    sound.play();
  }

  return (
    <div id="drum-machine" tabIndex={0} onKeyDown={handleClickOrKeydown} onClick={handleClickOrKeydown}>
      <div className="container">
        <Display audioDescription={audioDescription}/>
        <div className="buttons">
          {drumpadData.map(obj => <Drumpad data={obj} setAudioDescription={setAudioDescription}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
