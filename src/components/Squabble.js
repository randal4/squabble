import React from 'react';
import SquabblesList from './SquabbleList';

const Squabbles = ({key, header, description}) => {
  return(
    <div>
      <p> {header} </p>
      {description}
    </div>
  );
};

export default Squabbles;
