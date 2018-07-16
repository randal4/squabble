import React, { Component } from 'react';
import Loader from './Loader'
import { connect } from 'react-redux';
import axios from 'axios';

import { FetchRequest } from '../../actions/FetchRequest';
import { FetchSuccess } from '../../actions/FetchSuccess';
import { FetchFailure }from '../../actions/FetchFailure';

class Streams extends Component{
  componentWillMount() {
    this.apiRequest();
    this.props.fetchRequest();
  }

  apiRequest() {
    axios.get('https://api.twitch.tv/kraken/streams/featured?client_id=dxziyievvo4bcidbmoonz4ep5kaq65')
      .then(response => {
        console.log(response);
        this.props.fetchSuccess();
      })
      .catch(e => {
        this.props.fetchFailure();
      });
  }

  render(){
    return(
      <div>
      {this.props.status === 'loading' ? (
        <Loader/>
      ): (
        <div></div>
      )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.TwitchApp.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: () => {
      return dispatch(FetchRequest());
    },
    fetchSuccess: () => {
      return dispatch(FetchSuccess());
    },
    fetchFailure: () => {
      return dispatch(FetchFailure());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Streams)
