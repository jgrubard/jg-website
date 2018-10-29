import React, { Component } from 'react';

class About extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div className='about-card card'>
        <h2 className='title'>Welcome</h2>
        <div className='about-flex'>
          <img className='jeremy-photo' src='https://s3.us-east-2.amazonaws.com/jeremy-grubard-website/FullSizeRender-sqaure-crop.jpg' />
          <div className='about-text'>
            <p>
              I'm Jeremy Grubard.
            </p>
            <p>
              I'm a Full Stack Software Engineer with a background in graphic design. I'm passionate about building applications that fill a need, from the ground up. I'm currently seeking opportunities to join a team where I can apply my passion for code, and help to create amazing products.
            </p>
            <p>
              I'm a rock climber determined to send the next route and to find the most efficient way to reach my goal. I approach my code with the same mindset. I welcome defeat, so that I can learn from it and use it as a stepping stone to success.
            </p>
            <p>
              <i>Technologies:</i> JavaScript, Node.js, Express, Sequelize, PostgreSQL, React, React Native, Redux, Git, HTML, CSS
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;