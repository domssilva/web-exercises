import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import './App.css';

import Display from './components/Display.js';
import ButtonsGrid from './components/ButtonsGrid.js';
import calculate from './tasks/calculate.js';

function App() {

  const [clicked, setClicked] = useState('');
  const [expression, setExpression] = useState('');

  const handleClick = value => {
    if (value !== '=' && value !== 'c') {
      setExpression(expression + value.toString());
    } 
    if (expression == '0') {
      
    }
    setClicked(value);
  }

  useEffect(() => {
      if (clicked === 'c') {
        setClicked(0);
        setExpression('');
      } else if (clicked === '=') {
        /*
        0: ƒ evaluatePostfix(exp)
        1: ƒ hasHigherPrecedence(op1, op2)
        2: ƒ infixToPostfix(exp)
        3: ƒ operation(operator, op1, op2)
        4: ƒ splitExpression(exp)
        */
       let splitted = calculate[4](expression);
       let infix = calculate[2](splitted);
       let result = calculate[0](infix); 
       setExpression(result);
      } 
  }, [clicked]);

  return (
    <div className="App">

      <section className="calculator">
        <Display clicked={clicked} expression={expression}/>
        <ButtonsGrid update={handleClick}/>
      </section>

    </div>
  );
}

export default App;
