import React, { Component } from 'react';
import PairUp from './PortfolioPages/PairUp';
import BetaTogether from './PortfolioPages/BetaTogether';
import MHIA from './PortfolioPages/MHIA';
import J2A from './PortfolioPages/J2A';
import Groop from './PortfolioPages/Groop';

class Portfolio extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  
  render() {
    return (
      <div className='project-container'>
        <Groop />
        <PairUp />
        <BetaTogether />
        <J2A />
        <MHIA />
      </div>
    );
  }
}

export default Portfolio;