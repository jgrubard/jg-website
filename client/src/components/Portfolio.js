import React, { Component } from 'react';
import PairUp from './PortfolioPages/PairUp';
import BetaTogether from './PortfolioPages/BetaTogether';
import MHIA from './PortfolioPages/MHIA';
import J2A from './PortfolioPages/J2A';

class Portfolio extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  
  render() {
    return (
      <div className='bg-container'>
        <div className='project-container'>
          <PairUp />
          <BetaTogether />
          <J2A />
          <MHIA />
        </div>
      </div>
    );
  }
}

export default Portfolio;