import React from 'react';

const Squabbles = ({id, title, author, onClick}) => {
  return(
    <li>
      <h3> ({id}) - {title} </h3>
      <p></p>
      <button onClick={() => onClick(id)}>delete</button>
      <hr/>
    </li>
  );
};

export default Squabbles;
