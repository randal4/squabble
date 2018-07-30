import React, { Component } from 'react';
import Squabbles from './components/Squabbles';
import Streams from './components/twitch/Streams';
import './App.css';
import SquabbleFirestore from './components/SquabbleFirestore';

class App extends Component{
  render() {
    return (
      <div>
        <SquabbleFirestore/>
      </div>
    );
  }
}

export default App;
