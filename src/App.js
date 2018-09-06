import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt as faSignInSolid, faStar as faStarSolid, faUserCircle, faThumbsUp as faThumbsUpSolid, faTrashAlt as faTrashAltSolid} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faThumbsUp as faThumbsUpRegular, faTrashAlt as faTrashAltRegular} from '@fortawesome/free-regular-svg-icons';
import Content from './components/Content';
import { withRouter } from 'react-router-dom';

library.add(faFacebookSquare, faTwitterSquare, faSignInSolid, faUserCircle, faStarSolid, faStarRegular, faThumbsUpRegular, faThumbsUpSolid, faTrashAltRegular, faTrashAltSolid);

class App extends Component{
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default withRouter(App);