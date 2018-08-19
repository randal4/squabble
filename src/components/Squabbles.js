import React from 'react';
import SquabbleList from './SquabbleList';
import AddSquabble from './AddSquabble';
import Login from './Login';

const Squabbles = () => {
  return(
    <div>
      <Login/>
      <SquabbleList/>
    </div>
  );
};

export default Squabbles;
