import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      {/* Navbar will be rendered on every route */}
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/> 
        {/* When there is no match for the route, error will be displayed */}
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
