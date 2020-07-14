import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Location from './pages/Location';
import Store from './pages/Store';
import Error from './pages/Error';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/location' component={Location}/>
      <Route exact path='/store' component={Store}/>
      <Route path='/' component={Error}/>
    </Switch>
  );
}

export default App;
