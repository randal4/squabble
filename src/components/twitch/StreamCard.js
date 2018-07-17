import React from 'react';

const StreamCard = ({streamLink, streamCover}) => {
  return (
    <div className="stream-cards">
      <a href={streamLink}>
        <img className="stream-cover"
          src={streamCover}
          />
      </a>
    </div>
  )
};

export default StreamCard
