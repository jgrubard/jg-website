import React from 'react';
// import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

const PairUp = () => {
  return (
    <div className='project-card'>
      <h3>Pair Up!</h3>
      <p>
        This is an expansion project on beta≈Together. Gym administrators can set up an account through the React web app so that they can manage their organization along with the members within. Gym members can also set up an account via React Native mobile app, where they can search for gyms in the area, check-in upon arrival, and connect with other members. Once members go through the request/accept process with other members, they can a live chat initiate a live chat with their new climbing buddy.
      </p>
      <a href='https://www.github.com/jgrubard/pair-up-web'>Github Repo - Web App</a>
      <br />
      <a href='https://www.github.com/jgrubard/pair-up-mobile'>Github Repo - Mobile App</a>
      <br />
      <a href='https://pair-up.herokuapp.com'>Deployed Web App</a>
      <br />
      <br />
      <p>
        Check out the app in action!
      </p>
      <div className='player-wrapper'>
        {/* <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=oQXhNspw-pE'
          controls={true}
          width='100%'
          height='100%'
        /> */}
        <YouTube
          videoId='oQXhNspw-pE'
          className='video-player'
          opts={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default PairUp;