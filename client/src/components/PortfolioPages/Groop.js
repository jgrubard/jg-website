import React from 'react';

const Groop = () => {
  return (
    <div className='project-card card'>
      <h2 className='title'>groop</h2>
      <p>
        A project management web application where users can create projects, include teammates on these projects, and create/organize tasks. Users see real time project modifications using Socket.io.
      </p>
      <p>
        <i>Technologies:</i> Express, Sequelize, PostgreSQL, React, Redux, Socket.io, JWT
      </p>
      <a href='https://groop-jg.herokuapp.com' target='_blank'>Deployed Application</a>
      <a href='https://github.com/jgrubard/project-manager-2' target='_blank'>Github Repo</a>
    </div>
  );
}

export default Groop;