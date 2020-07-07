import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import './App.css';

import Display from './components/Display.js';
import ButtonsGrid from './components/ButtonsGrid.js';

function App() {

  const [isDecimal, setIsDecimal] = useState(false);
  const [clicked, setClicked] = useState('');
  const [display, setDisplay] = useState('0');

  const operators = new RegExp(/[=*/+-]/);

  const handleClick = value => {
    // verify last display item.
    const lastDisplayElementIdx = Number(display.length - 1);
    const lastDisplayElement = display[lastDisplayElementIdx];
    
    switch(value) {
      case '.':

        if (isDecimal) {
          break;
        } else {
          setIsDecimal(true);
        }

        if (lastDisplayElement === '.') {
          break;
        } else {
          setDisplay(exp => {return exp + value});
        }

        break;

      case '<':
        if (display.length === 1) {
          setDisplay(0);
          setClicked('');
        } else if (display.length > 1) {
          setDisplay(display.slice(0, lastDisplayElementIdx));
        }
        break;
      case '=':
        setDisplay(parseFloat(eval(display)));
        break;
      case 'c':
        setDisplay(0);
        setClicked('');
        break;
      default:
        
        // if its an operator, set isDecimal to false
        if (String(value).match(operators)) {
          setIsDecimal(false);
          setClicked(value);
          setDisplay(prev => {return prev + value});
          break;
        }

        // If its a zero -> dont allow more zeros
        if (value == 0 && lastDisplayElement == 0) {
          break;
        }

        if (String(lastDisplayElement).match(operators)) {
          setClicked(value);  
        } else {
          setClicked(val => {return String(val) + String(value)});
        }

        if (display == 0) {
          setDisplay(String(value));
        } else {
          setDisplay(previous => {return String(previous) + String(value)});
        }
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
