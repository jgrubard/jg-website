import React from 'react';
import ReactPlayer from 'react-player';

const BetaTogether = () => {
  return (
    <div>
      <h3>betaTogether</h3>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UEuhqUbGRHI'
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
}

export default BetaTogether;