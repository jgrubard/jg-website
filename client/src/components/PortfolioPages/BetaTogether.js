import React from 'react';
import ReactPlayer from 'react-player';

const BetaTogether = () => {
  return (
    <div>
      <h3>betaTogether</h3>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=UEuhqUbGRHI'
        controls={true}
      />
    </div>
  );
}

export default BetaTogether;