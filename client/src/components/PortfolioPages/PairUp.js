import React from 'react';
import ReactPlayer from 'react-player';

const PairUp = () => {
  return (
    <div className='project-card card'>
      <h2 className='title'>Pair Up!</h2>
      <p>
        This is an expansion project on beta≈Together. Gym administrators can set up an account through the React web app so that they can manage their organization along with the members within. Gym members can also set up an account via React Native mobile app, where they can search for gyms in the area, check-in upon arrival, and connect with other members. Once members go through the request/accept process with other members, they can a live chat initiate a live chat with their new climbing buddy.
      </p>
      <a href='https://www.github.com/jgrubard/pair-up-web' target='_blank'>Github Repo - Web App</a>
      <a href='https://www.github.com/jgrubard/pair-up-mobile' target='_blank'>Github Repo - Mobile App</a>
      <a href='https://pair-up.herokuapp.com' target='_blank'>Deployed Web App</a>
      <br />
      <p>
        Check out the app in action!
      </p>
      <div className='player-wrapper'>
        <ReactPlayer
          className='video-player'
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