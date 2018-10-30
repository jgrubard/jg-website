import React, { Component } from 'react';
import { Fa } from 'mdbreact';

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
              I’m a software engineer -- but mainly, I’m a problem solver. Writing code and building applications are simply puzzles, and I love connecting the pieces in order to create a useful tool that will help make life easier.
            </p>
            <p>
              As a rock climber, I find building software often requires a similar approach to completing a difficult climb. While often we can take a brute force approach and power through, it’s much better to step back and plan out your moves. Using careful thought and technique, we can slowly but surely climb through the building process. Sometimes the easy way comes with it’s own pitfalls, and we may need to think outside the box.
            </p>
            <p>
              <i>Technologies:</i> JavaScript, Node.js, Express, Sequelize, PostgreSQL, React, React Native, Redux, Git, HTML, CSS
            </p>
          </div>
        </div>
        <div className='icons-flex-container'>
          <a href='https://s3.us-east-2.amazonaws.com/jeremy-grubard-website/Jeremy_Grubard.pdf' target='_blank'>
            <span className='resume-about'>
              Resume
            </span>
          </a>
          <a href="http://www.github.com/jgrubard" target='_blank'><Fa className='icons-about' icon="github" /></a>
          <a href="http://www.linkedin.com/in/jgrubard" target='_blank'><Fa  className='icons-about' icon="linkedin" /></a>
        </div>
      </div>
    );
  }
}

export default About;