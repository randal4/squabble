import React, {Component} from 'react';
import Squabble from './Squabble';
import * as actions from '../actions/SquabbleActions';
import { FetchSquabbles } from '../actions/FetchSquabbles';
import { connect } from 'react-redux';
import { DeleteSquabble } from '../actions/DeleteSquabbles';

class SquabbleList extends Component {
  componentWillMount() {
    this.props.fetchSquabbles();
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
      return dispatch(DeleteSquabble(id));
    },
    fetchSquabbles: () => {
      return dispatch(FetchSquabbles());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SquabbleList);
