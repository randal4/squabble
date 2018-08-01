import React from 'react';

const Squabbles = (props) => {
  let {id, title, authorVotes, opposerVotes, authorText, opposerText, onClick} = props;

  return(
    <li>
      <h3> ({id}) - {title} </h3>
      <div>
        <p>Votes</p>
        <p>{authorVotes || 0} - {opposerVotes || 0}</p>
      </div>
      <div>
        <div>
          <p>{authorText}</p>
        </div>
        <div>
          <p>{opposerText}</p>
        </div>
      </div>
      <button onClick={() => onClick(id)}>delete</button>
      <hr/>
    </li>
  );
};

export default Squabbles;
