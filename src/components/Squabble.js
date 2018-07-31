import React from 'react';

const Squabbles = (props) => {
  return(
    <li>
      <h3> ({props.id}) - {props.title} </h3>
      <div>
        <p>Votes</p>
        <p>{props.authorVotes || 0} - {props.opposerVotes || 0}</p>
      </div>
      <div>
        <div>
          <p>{props.authorText}</p>
        </div>
        <div>
          <p>{props.opposerText}</p>
        </div>
      </div>
      <button onClick={() => props.onClick(props.id)}>delete</button>
      <hr/>
    </li>
  );
};

export default Squabbles;
