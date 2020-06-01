import React from 'react';

const ButtonsGrid = props => {

  const ids = {
    0: "zero",1: "one",2: "two",3: "three",
    4: "four",5: "five",6: "six",7: "seven",
    8: "eight", 9: "nine", "-": "subtract",
    "+": "add", "*": "multiply", "/": "divide",
    ".": "decimal", 'c': "clear"
  };

  const buttons = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    "=","+","-","c","*","/",".","<"
  ];

  return(
    <div className="buttons-grid">
        {buttons.map(btn => (
          <button id={ids[btn]} onClick={() => props.update(btn)} key={btn}>
            {btn}
          </button>
        ))}
    </div>
  );
}

export default ButtonsGrid;
