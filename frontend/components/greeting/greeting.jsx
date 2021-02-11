import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
      <button className="login-signup" onClick={() => openModal('login')}>Login / Register</button>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="dropdown">
        <h2>Hi, <button>{currentUser.name}</button></h2>
          <div className="item">
            <p>
              <button className="header-button" onClick={logout}>Log Out</button>
            </p>
          </div>
        </div>
    </hgroup>
  )


  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
