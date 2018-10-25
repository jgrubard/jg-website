import React from 'react';
// import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

const BetaTogether = () => {
  return (
    <div className='project-card'>
      <h3>beta≈Together</h3>
      <p>
        A web application for users to login/sign up, and connect with potential climbing partners while checked in to rock climbing gyms.
      </p>
      <a href='https://www.github.com/jgrubard/stackathon-climbing-app'>Github Repo</a>
      <br />
      <br />
      <p>
        Check out the app in action!
      </p>
      <div className='player-wrapper'>
        {/* <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UEuhqUbGRHI'
          controls={true}
          width='100%'
          height='100%'
        /> */}
        <YouTube
          videoId='UEuhqUbGRHI'
          className='video-player'
          opts={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default BetaTogether;