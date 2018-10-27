import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Intro} />
          <Nav />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;