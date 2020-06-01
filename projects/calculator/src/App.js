import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import './App.css';
import Display from './components/Display.js';
import ButtonsGrid from './components/ButtonsGrid.js';

function App() {

  const [clicked, setClicked] = useState('');
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression(expression + value.toString());
    setClicked(value);
  }

  useEffect(() => {
      console.log('clicked');
  }, [clicked]);

  return (
    <div className="App">

      <section className="calculator">
        <Display show={expression}/>
        <ButtonsGrid update={handleClick}/>
      </section>

    </div>
  );
}

export default App;
