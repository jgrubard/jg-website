import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'mdbreact';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      welcomeMessage: '',
      cursor: true,
      skipped: false
    }
    this.skipIntro = this.skipIntro.bind(this);
    this.timerID = 0;
  }

  componentDidMount() {
    const welcomeMessage = `
      Hey there. I'm Jeremy.
    `
    this.setState({ welcomeMessage });
    setTimeout(() => {
      this.createMessage(welcomeMessage);
    }, 400);
    this.flashingCursor();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  flashingCursor() {
    this.timerID = setInterval(() => {
      this.setState({ cursor: !this.state.cursor });
    }, 600)
  }

  createMessage(input, message = '') {
    if(!input.length) {
      return;
    }
    setTimeout(() => {
      message += input[0];
      this.setState({ message: message });
      this.createMessage(input.slice(1), message);
      message.length === this.state.welcomeMessage.length && this.setState({ skipped: true });
    }, 60);
  }

  skipIntro(ev) {
    ev.preventDefault();
    this.setState({ message: this.state.welcomeMessage, skipped: true });
    this.setState({ loop: false });
  }

  render() {
    const { message, welcomeMessage, cursor, skipped } = this.state;
    const { skipIntro } = this;
    return (
      <div className='intro-container'>
        <div className='message-container'>
          {
            message && 
              <div>
                <span className='message-text'>
                  <strong>
                    {skipped ? welcomeMessage : message}
                  </strong>
                </span>
                <span className={`cursor${ cursor ? ' cursor-visible' : ' cursor-invisible'}`}>|</span>
              </div>
          }
        </div>
        {
          skipped ? (
            <Link to='/about'>
              <Button color='blue-grey' className='button button-enter'>
                Come on in
              </Button>
            </Link>
          ) : (
            <Button className='button button-enter' color='blue-grey' onClick={skipIntro}>
              Skip
            </Button>
          )
        }
      </div>
    );
  }
}

export default Intro;