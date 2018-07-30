import React from 'react';
import { connect } from 'react-redux';
import { AddSquabbles } from '../actions/AddSquabbles';

const AddSquabble = ({onClick}) => {
    let input;

    return (
      <div>
        <input ref={node =>
          input = node
        }/>
        <button onClick={ () =>{
          console.log("adding!")
          onClick({
            title: 'what',
            author: 'testAuthor'
          })
          input.value = '';
        }}>add</button>
      </div>
    );
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: (squabble) => {
      return dispatch(AddSquabbles(squabble));
    }
  };
}

export default connect(null, mapDispatchToProps)(AddSquabble);
