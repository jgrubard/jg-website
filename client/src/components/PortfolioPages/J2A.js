import React from 'react';

const J2A = () => {
  return (
    <div className='project-card card'>
      <h2 className='title'>J2A Widgets</h2>
      <p>
        A faux e-commerce site where customers can browse a catalogue of products and add items to a cart. Once a customer logs in or signs up for a new account, their cart carries over to their account. Customers can proceed to purchase what's in their cart using Stripe.js, and email confirmations are sent out using Nodemailer.js. 
      </p>
      <p>
        <i>Technologies:</i> Express, Sequelize, PostgreSQL, React/Redux, JWT, Nodemailer, Stripe
      </p>
      <a href='https://www.j2a-widgets.herokuapp.com' target='_blank'>Deployed Application</a>
      <a href='https://www.github.com/jgrubard/grace-shopper' target='_blank'>Github Repo</a>
    </div>
  );
}

export default J2A;