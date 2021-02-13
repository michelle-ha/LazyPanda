import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <>
      <button className="login-signup" onClick={() => openModal('login')}>Add post</button>
      <button className="login-signup" onClick={() => openModal('login')}>Login / Register</button>

    </>
  );
  const personalGreeting = () => (
    <>
      <Link to="/add-new-post">
        <button type="button">Add post</button>
      </Link>
      <button className="header-button" onClick={logout}>Log Out</button>
    </>
  )


  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
