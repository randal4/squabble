import React from 'react';
import Home from './Home';
import Squabbles from './Squabbles';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';


const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/squabbles' component={Squabbles}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
);

export default Content;