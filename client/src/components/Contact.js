import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';

import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      sent: false,
      validEmail: true,
      rows: 5,
      height: 164
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.onChange = this.onChange.bind(this);
    this.sendAgain = this.sendAgain.bind(this);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }
  
  sendDataToServer(data) {
    return axios.post('/api/email', data)
      .then(result => result.data)
      .catch(err => console.log(err));
  }

  sendEmail() {
    const { email, message } = this.state;
    if(email.indexOf('@') === -1) {
      this.setState({ validEmail: false });
    } else {
      this.sendDataToServer({ email, message });
      this.setState({ email: '', message: '', sent: true });
    }
  }

  sendAgain() {
    this.setState({ sent: false })
  }

  onChange(ev) {
    const change = {};
    const { name, value } = ev.target;
    change[name] = value;
    this.setState(change);
    this.calcRows(value, ev.target.clientWidth)
  }

  calcRows(input, width) {
    const approxCharWidth = 7.6;
    const margin = 40;
    let splitOnEnter = input.split('\n');
    let rows = 0;
    splitOnEnter.forEach(unbrokenLine => {
      let pixelWidth = (unbrokenLine.length * approxCharWidth) - margin;
      let tempRows = 0;
      while(pixelWidth > width) {
        pixelWidth -= width;
        tempRows++;
      }
      rows += tempRows;
    });
    // console.log(width, rows);
    const allRows = rows + splitOnEnter.length;
    this.setState({ rows: allRows > 5 ? allRows : 5 });
  }

  render() {
    const { email, message, sent, validEmail, rows } = this.state;
    const { onChange, sendEmail, sendAgain } = this;
    const isMobile = window.innerWidth <= 500;
    return (
      <div className='contact-card card'>
        <h2 className='title'>Contact Me</h2>
        {
          sent ? (
            <div className='input'>
              <div className='thank-you'>
                <h4 className='title'>Thanks for the message!</h4>
                <h4 className='title'>I'll get back to you as soon as I can!</h4>
              </div>
              <h5 className='title'>~ Jeremy</h5>
              <Button
                color='primary'
                onClick={sendAgain}
                className='button'
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <div className='input'>
              <Input
                type='email'
                label='Enter your email address'
                icon='envelope'
                name='email'
                value={email}
                onChange={onChange}
              />
              { !validEmail && email &&
                  <span className='error'>Please enter a valid email address.</span>
              }
              <Input
                type='textarea'
                label='Write your message here'
                icon='pencil'
                name='message'
                value={message}
                onChange={onChange}
                rows={rows}
              />
              <Button
                color='primary'
                onClick={sendEmail}
                disabled={!email || !message}
                className='button'
              >
                Send Message
              </Button>
            </div>
          )
        }
      </div>
    );
  }
}

export default Contact;