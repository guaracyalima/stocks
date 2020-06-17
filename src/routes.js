import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/';
import Fundos from './pages/Fundos/';

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact="exact" component={Home}/>
      <Route path="/fundos" component={Fundos}/>
    </Switch>
  )
}
