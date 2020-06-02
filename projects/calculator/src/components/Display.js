import React from 'react';

const Display = props => {

  return(
    <div className="display-container">
      <p id="display">{props.expression}</p>
      <p>{props.clicked}</p>
    </div>
  );
}

export default Display;
