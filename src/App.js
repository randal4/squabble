import React, { Component } from 'react';
import Squabbles from './components/Squabbles';
import Streams from './components/twitch/Streams';
import './App.css';

class App extends Component{
  render() {
    return (
      <div>
        <Squabbles/>
      </div>
    );
  }
}

export default App;
