import React from 'react';

import Post from './components/post';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="https://www.react-spring.io/docs/hooks/api" target="_blank">react-spring docs</a>
      </nav>
      <main>
        <Post title='post 1'/>
        <Post title='post 2'/>
      </main>
    </div>
  );
}

export default App;
