import React from 'react';
import SquabbleList from './SquabbleList';
import AddSquabble from './AddSquabble';

const Squabbles = () => {
  return(
  <div>
    <p> Squabbles! </p>
    <AddSquabble/>
    <SquabbleList/>
  </div>
);
};

export default Squabbles;
