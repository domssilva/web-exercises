import React from 'react';

const Drumpad = props => {

  const {keyCode, keyLetter, description, audioUrl} = props.data;

  return (
    <div key={keyCode}>
      <button id={description} className='drum-pad'>
        <audio id={keyLetter} src={audioUrl} className="clip"></audio>
        {keyLetter}
      </button>
    </div>
  );
}

export default Drumpad;