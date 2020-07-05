import React from 'react';
import './App.css';

const initialState = {
  session: 25,
  breaktime: 5,
  timerLabel: 'Session',
};

const App = () => {

  const [session, setSession] = React.useState(initialState.session);
  const [breaktime, setBreaktime] = React.useState(initialState.breaktime);

  const [timer, setTimer] = React.useState(initialState.session);
  const [timerId, setTimerId] = React.useState(0);
  const [timerLabel, setTimerLabel] = React.useState(initialState.timerLabel);

  const [on, setOn] = React.useState(false);
  const [audio, setAudio] = React.useState(null);

  const [pomodori, setPomodori] = React.useState([]);

  const debug = (display=false) => {
    let cssPause = {
      background: 'red'
    }

    let cssPlay = {
      background: 'green'
    }
    if (display) {
      return on === false ? 
      <h1 style={cssPause}>pause.</h1> : <h1 style={cssPlay}>play!</h1>;
    }
  }

  const formatTime = () => {

    if (timer === 0) {
      return '00:00';
    } 

    if (timer < 10) {
      return '0' + String(parseFloat(timer).toFixed(2)).replace('.', ':');
    }

    return String(parseFloat(timer).toFixed(2)).replace('.', ':');
  }

  const updateLength = (label, one) => {
    if (!on) {
      let newVal;

      switch(label) {
        case 'breaktime':
          newVal = breaktime + one;
          if (newVal > 0 && newVal <= 60) {
            setBreaktime(breaktime => breaktime + one);
          }
          break;
          
        case 'session':
        default:
          newVal = session + one;
          if (newVal > 0 && newVal <= 60) {
            setSession(session => newVal);
          }
      }
    }
  }

  const setSessionTimer = () => {
    setTimer(session);
    setTimerLabel('Session');
  }

  const setBreakTimer = () => {
    setTimer(breaktime);
    setTimerLabel('Break');
  }

  const reset = () => {
    if (on) {
      pause();
    }

    setPomodori([]);

    audio.pause();
    audio.currentTime = 0;

    setTimerId(0);
    setSession(initialState.session);
    setTimer(initialState.session);
    setBreaktime(initialState.breaktime);
    setTimerLabel(initialState.timerLabel);
  }

  const pause = () => {
    setOn(false);
    clearInterval(timerId);
  }
  
  const play = (speed = 1000) => {
    let timerCopy = timer;
    
    let id = setInterval(() => {
      timerCopy -= 0.01;
      setTimer(timerCopy);
      }, speed);

      setTimerId(id);
  }

  const onOff = () => {
    setOn(bool => !bool);
  }

  React.useEffect(() => {
    setAudio(document.querySelector('#beep'));
  }, []);

  React.useEffect(() => {
    if (on) {
      play();
    } else {
      pause();
    }
  }, [on]);

  React.useEffect(() => {
    if (timer <= 0) {
      pause();
      setTimer(0);
      audio.play(); // +- 4s
      setOn(false);

      setTimeout(() => {
        // next countdown
        if (timerLabel === 'Session') {
          setBreakTimer()
        } else {
          setSessionTimer();
        }
      }, 4000);
    }
  }, [timer]);

  React.useEffect(() => {
    if (!on) {
      timerLabel === 'Session' ?
      setTimer(session) : setTimer(breaktime);
    }
  }, [session, breaktime]);

  React.useEffect(() => {
    if (timerId != 0) {
      document.querySelector('#start_stop').click();

      if (timerLabel === 'Break') {
        setPomodori(pomodoro => pomodoro.concat('x'));
      }
    }
  }, [timerLabel]);

  return (
    <div className="App">
    <h1>Pomodoro Clock</h1>

    {/* <>{debug(true)}</> */}

    <div className="controllers">
      <div className="container">
        <button onClick={() => updateLength('session', 1)} id="session-increment">^</button>
        <p id="session-length">{session}</p>
        <button onClick={() => updateLength('session', -1)} id="session-decrement">V</button>
      </div>
      <div className="container-label">
        <h3>session length</h3>
      </div>
      <hr/>
      <div className="container-label">
        <h3>break length</h3>
      </div>
      <div className="container" id="break-label">
        <button onClick={() => updateLength('breaktime', 1)} id="break-increment">^</button>
        <p id="break-length">{breaktime}</p>
        <button onClick={() => updateLength('breaktime', -1)} id="break-decrement">V</button>
      </div>
    </div>

    <div className="pomodori">
      {pomodori.map((pomodoro, idx) => <img key={idx} width="25px" height="25px" src="https://openclipart.org/image/800px/svg_to_png/225413/mini-tomato.png" alt="tomatoe icon"/>)}
    </div>

    <main id="timer-label">
      <audio id="beep" 
        preload="auto" 
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" 
      />
      <p id="session-label">{timerLabel} </p>
      <p id="time-left">{formatTime(timer)}</p>
      <button onClick={onOff} id="start_stop" >PLAY</button>
      <button onClick={reset} id="reset">reset</button>
    </main>

  </div>
    );
  }

export default App;
  