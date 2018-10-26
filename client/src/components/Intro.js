import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'mdbreact';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      welcomeMessage: '',
      skipped: false
    }
    this.skipIntro = this.skipIntro.bind(this);
  }

  componentDidMount() {
    const welcomeMessage = `
      Hey there. I'm Jeremy.
    `
    this.setState({ welcomeMessage });
    setTimeout(() => {
      this.createMessage(welcomeMessage);
    }, 400);
  }

  createMessage(input, message = '') {
    if(!input.length) {
      return;
    }
    setTimeout(() => {
      message += input[0];
      this.setState({ message });
      this.createMessage(input.slice(1), message);
      message.length === this.state.welcomeMessage.length && this.setState({ skipped: true });
    }, 60);
  }

  skipIntro(ev) {
    ev.preventDefault();
    this.setState({ message: this.state.welcomeMessage, skipped: true });
  }

  render() {
    const { message, welcomeMessage, skipped } = this.state;
    const { skipIntro } = this;
    return (
      <div className='intro-container bg-container'>
        
        <div className='message-container'>
          { message && <p className='message-text'><strong>{ skipped ? welcomeMessage : message }</strong></p> }
        </div>

        {
          skipped
            ? (
              <Link to='/home'>
                <Button color='indigo' className='button button-enter'>
                  Come on in
                </Button>
              </Link>
            ) : (
              <Button className='button button-enter' color='indigo' onClick={skipIntro}>
                Skip
              </Button>
            )
        }

      </div>
      
    );
  }

}

export default Intro;