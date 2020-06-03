import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import './App.css';

import Display from './components/Display.js';
import ButtonsGrid from './components/ButtonsGrid.js';

function App() {

  const [clicked, setClicked] = useState('');
  const [display, setDisplay] = useState('0');

  const operators = /[=*/+-]/;

  const handleClick = value => {
    // verify last display item.
    const lastDisplayElementIdx = Number(display.length - 1);
    const lastDisplayElement = display[lastDisplayElementIdx];
    
    switch(value) {
      case '<':
        if (display.length === 1) {
          setDisplay(0);
          setClicked('');
        } else if (display.length > 1) {
          setDisplay(display.slice(0, lastDisplayElementIdx));
        }
        break;
      case '=':
        setDisplay(eval(display));
        break;
      case 'c':
        setDisplay(0);
        setClicked('');
        break;
      default:
        
        // If its a zero -> dont allow more zeros
        if (value === 0 && lastDisplayElement === 0) {
          break;
        } else if (value === '.' && lastDisplayElement === '.') {
          // If its a . -> dont allow more dots
          break;
        }
        setClicked(value);
        setDisplay(exp => {return exp + value});
    }

  }

  return (
    <div className="App">

      <section className="calculator">
        <Display clicked={clicked} display={display}/>
        <ButtonsGrid update={handleClick}/>
      </section>

    </div>
  );
}

export default App;
