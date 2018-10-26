import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import BackgroundImage from './BackgroundImage';
import Intro from './Intro';
import Home from './Home';
// import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Intro} />
          <Nav />

          {/* <div className='main-background'> */}
            {/* <div style={styles.container}> */}
              <Route exact path='/home' component={Home} />
              {/* <Route exact path='/resume' component={Resume} /> */}
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/portfolio' component={Portfolio} />
            {/* </div> */}
          {/* </div> */}
          {/* <BackgroundImage /> */}
        </div>
      </Router>
    );
  }
}

export default App;

const styles = {
  container: {
    margin: '80 30'
  }
}