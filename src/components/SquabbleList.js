import React, {Component} from 'react';
import Squabble from './Squabble';
import { connect } from 'react-redux';
import * as actions from '../actions/SquabbleActions';
import { RequestApi } from '../actions/RequestApi';

class SquabbleList extends Component {
  componentWillMount() {
    this.props.requestApi();
  }

  render(){
    return(
      <ul>
        {this.props.squabbles.map(sq =>
            <Squabble key={sq.id} {...sq} onClick={this.props.onClick}/>
          )
        }
      </ul>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    squabbles: state.SquabbleApp.squabbles
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: (id) => {
      console.log(id);
      return dispatch(actions.deleteSquabble(id));
    },
    requestApi: () => {
      return dispatch(RequestApi());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SquabbleList);
