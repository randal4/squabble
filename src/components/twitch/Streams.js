import React, { Component } from 'react';
import Loader from './Loader'
import { connect } from 'react-redux';
import axios from 'axios';

import StreamCard from './StreamCard';
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
        const streams = response.data.featured.map((f) => {
          return f.stream;
        });

        this.props.fetchSuccess(streams);
      })
      .catch(e => {
        this.props.fetchFailure(e);
      });
  }


  render(){
    const streamCardItems = this.props.streams.map((stream) => {
        return (<StreamCard
        key={stream._id}
        streamCover={stream.preview.medium}
        streamLink={stream.channel.url}
      />);
    }
    );

    return(
      <div>
      {this.props.status === 'loading' ? (
        <Loader/>
      ): (
        this.props.status === 'success' ? (
          <div className="stream-cards">
            {streamCardItems}
          </div>
        ) : (
          <div>
          </div>
        )
      )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.TwitchApp.status,
    streams: state.TwitchApp.streams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: () => {
      return dispatch(FetchRequest());
    },
    fetchSuccess: (streams) => {
      return dispatch(FetchSuccess(streams));
    },
    fetchFailure: () => {
      return dispatch(FetchFailure());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Streams)
