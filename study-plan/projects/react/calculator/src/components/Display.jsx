import React from 'react';

const Display = props => {

  let formula;
  if (props.formula.length === 0) {
    formula = 0;
  } else {
    formula = props.formula;
  }

  return (
    <div className="display-container">
      <h1 id="display">{formula}</h1>
      <h2>{props.formula}</h2>
    </div>
  );
}

export default Display;
