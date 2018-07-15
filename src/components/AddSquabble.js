import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/SquabbleActions'

const AddSquabble = ({dispatch}) => {
    let input;

    return (
      <div>
        <input ref={node =>
          input = node
        }/>
        <button onClick={ () =>{
          dispatch(actions.addSquabble(10, this.input, 'testing'));
          input.value = '';
        }}>add</button>
      </div>
    );
}

export default connect()(AddSquabble);
