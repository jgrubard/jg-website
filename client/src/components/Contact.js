import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';

import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      sent: false
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.onChange = this.onChange.bind(this);
    this.sendAgain = this.sendAgain.bind(this);
  }

  sendDataToServer(data) {
    return axios.post('/api/email', data)
      .then(result => result.data)
      .catch(err => console.log(err));
  }

  sendEmail() {
    const { email, message } = this.state;
    this.sendDataToServer({ email, message });
    this.setState({ email: '', message: '', sent: true });
  }

  sendAgain() {
    this.setState({ sent: false })
  }

  onChange(ev) {
    const change = {}
    const { name, value } = ev.target;
    change[name] = value;
    this.setState(change);
  }

  render() {
    console.log(this.state)
    const { email, message, sent } = this.state;
    const { onChange, sendEmail, sendAgain } = this;
    return (
      <div>
        <h2 style={styles.title}>Contact Me</h2>
        {
          sent ? (
            <div style={styles.input}>
              <h4 style={styles.title}>Thanks for the message!</h4>
              <h4 style={styles.title}>I'll get back to you as soon as I can!</h4>
              <h5 style={styles.title}>~ Jeremy</h5>
              <Button
                color='primary'
                onClick={sendAgain}
                style={styles.button}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <div style={styles.input}>
              <Input
                type='email'
                label='Enter your email address'
                icon='envelope'
                name='email'
                value={email}
                onChange={onChange}
              />
              <Input
                type='textarea'
                label='Write your message here'
                icon='pencil'
                name='message'
                value={message}
                onChange={onChange}
              />
              <Button
                color='primary'
                onClick={sendEmail}
                disabled={!email || !message}
                style={styles.button}
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

const styles = {
  title: {
    textAlign: 'center'
  },
  input: {
    width: '50%',
    margin: '0 auto'
  },
  button: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  }
}