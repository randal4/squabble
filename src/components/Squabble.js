import React from 'react';

const Squabbles = ({id, header, description, onClick}) => {
  return(
    <div onClick={() => onClick(id)}>
      <h3> ({id}) - {header} </h3>
      <p>{description}</p>
    </div>

  );
};

export default Squabbles;
