import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div style={styles.container}>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/portfolio' component={Portfolio} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

const styles = {
  container: {
    margin: '70 30'
  }
}