import React from 'react';
import ReactPlayer from 'react-player';

const PairUp = () => {
  return (
    <div>
      <h3>Pair Up!</h3>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=oQXhNspw-pE'
        controls={true}
      />
    </div>
  );
}

export default PairUp;