import React from 'react';

import Post from './components/Post';
import Slide from './components/Slide';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="https://www.react-spring.io/docs/hooks/api" target="_blank">react-spring docs</a>
      </nav>
      <main>
        <Slide/>
      </main>
    </div>
  );
}

export default App;
