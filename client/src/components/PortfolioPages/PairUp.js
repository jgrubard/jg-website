import React from 'react';
import ReactPlayer from 'react-player';

const PairUp = () => {
  return (
    <div>
      <h3>Pair Up!</h3>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=oQXhNspw-pE'
          controls={true}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
}

export default PairUp;