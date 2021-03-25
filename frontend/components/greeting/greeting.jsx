import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <>
      <button className="add-post-button" onClick={() => openModal('login')}>Add post</button>
      <button className="login-signup" onClick={() => openModal('login')}>Login / Register</button>

    </>
  );
  const personalGreeting = () => (
    <>
      <Link to="/add-new-post">
        <button className="add-post-button" type="button">Add post</button>
      </Link>
      <button className="header-button" onClick={logout}>Log Out</button>
      <img className="profile-pic-header" src={currentUser.profilePicURL} />
    </>
  )


  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
