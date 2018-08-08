import React, { Component } from 'react';
import Squabbles from './components/Squabbles';
import './App.css';
import Header from './components/Header';

class App extends Component{
  render() {
    return (
      <div>
        <Header/>
        <Squabbles/>
      </div>
    );
  }
}

export default App;