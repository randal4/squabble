import React from 'react';
import Home from './Home';
import Squabbles from './Squabbles';
import Login from './Login';
import AddSquabble from './AddSquabble';
import { Switch, Route } from 'react-router-dom';


const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/squabbles' component={Squabbles}/>
      <Route path='/login' component={Login}/>
      <Route path='/new' component={AddSquabble}/>
    </Switch>
  </main>
);

export default Content;