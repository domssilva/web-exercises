import React, { useState } from 'react';

import './App.css';
import buttons from './data';
import Display from './components/Display';

function App() {

  const [formula, setFormula] = useState([]);
  const [display, setDisplay] = useState(0);
  const [prevEval, setPrevEval] = useState(0);
  const [isDecimal, setIsDecimal] = useState(false);
  const [lastClicked, setLastClicked] = useState([]);
  const [consecutiveOperators, setConsecutiveOperators] = useState([]);

  const verifyLastFormulaNumber = () => {
    let formulaStr = formula.join('') + '0';
    let nums = formulaStr.split(/[*/+-]/);
    let lastNums = nums[nums.length-1];

    return lastNums == 0;
  }

  const getRidOfDuplicateOperators = expression => {
    let newExpr = [];
    let binStack = [];
    let char, next, nextnext;
  
    for (let i = 0; i < expression.length; i++) {
      char = String(expression[i]);
      next = String(expression[i+1]);
      nextnext = String(expression[i+2]);
  
      if (isOperator(char)) {
        if (next === '-') {
          if (isOperator(nextnext)) {
            binStack.push(i);
            binStack.push(i+1);
          }
        } else if (isOperator(next)) {
          binStack.push(i);
        }
      }
    }
  
    binStack.forEach(idx => {
      expression[idx] = '';
    });
  
    return expression.join('');
  }

  const isOperator = str => {
    return str.match(/[*/+-]/);
  }

  const handleClick = (btn) => {
    setLastClicked(btn.value);

    if (btn.isOperator) {

      if (typeof lastClicked === 'string' && btn.value !== 'AC') {
        setConsecutiveOperators(op => {
          return op.concat(lastClicked, btn.value);
        });
      }

      if (lastClicked === '=' && btn.value !== 'AC') {
        setFormula([prevEval + btn.value]);
        return true;
      }

      switch(btn.value) {
        case 'AC':
          setDisplay(0);
          setFormula([]);
          setIsDecimal(false);
          setLastClicked([]);
          setPrevEval(0);
          return true;
        case '=':
          let evaluation;
          if (consecutiveOperators.length) {
            evaluation = eval(getRidOfDuplicateOperators(formula));
          } else {
            evaluation = eval(formula.join(''));
          }

          setDisplay(evaluation);
          setFormula(evaluation);
          setPrevEval(evaluation);
          setIsDecimal(false);
          return true;
        default:
          // 1. get all previous nums in formula
          setIsDecimal(false);
          break;
      }
    }
    
    if (btn.value === '.') {

      if (isDecimal) {
        return false;
      }

      setIsDecimal(true);
    }

    if (btn.value == '0') {
      let isPrevNumZero = verifyLastFormulaNumber();
      if (isPrevNumZero) {
        return false;
      }
    }

    // update display with display
    let exp = formula.concat(btn.value);
    
    // update formula
    setDisplay(exp);
    setFormula(exp);
  }

  const debug = (debug = false) => {
    if (debug) {
      return(
        <pre className="debug">
            LastClicked: {lastClicked};
            <br/>
            prevEval: {prevEval}
        </pre>
      );
    }
  }

  return (
    <>
    {/* {debug(true)} */}
    <div className="calculator">
      <Display display={display} formula={formula}/>
      <div className="buttons-container">
        {buttons.map(btn => (
          <button onClick={() => handleClick(btn)} key={btn.id} id={btn.id}>
            {btn.value}
          </button>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
