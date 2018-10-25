import React from 'react';
import PairUp from './PortfolioPages/PairUp';
import BetaTogether from './PortfolioPages/BetaTogether';
import MHIA from './PortfolioPages/MHIA';
import J2A from './PortfolioPages/J2A';

const Portfolio = () => {
  return (
    <div className='project-container'>
      <PairUp />
      <hr />
      <BetaTogether />
      <hr />
      <J2A />
      <hr />
      <MHIA />
    </div>
  );
}

export default Portfolio;