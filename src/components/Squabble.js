import React from 'react';

const Squabbles = ({id, header, description, onClick}) => {
  return(
    <li>
      <h3> ({id}) - {header} </h3>
      <p>{description}</p>
      <button onClick={() => onClick(id)}>delete</button>
      <hr/>
    </li>
  );
};

export default Squabbles;
