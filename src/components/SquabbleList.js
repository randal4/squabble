import React from 'react';
import Squabble from './Squabble';
import { connect } from 'react-redux';
import * as actions from '../actions/SquabbleActions';

const SquabbleList = ({squabbles, onClick}) => {
  return(
    <ul>
      {squabbles.map(sq =>
          <Squabble key={sq.id} {...sq} onClick={onClick}/>
        )
      }
    </ul>
  );
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SquabbleList);
