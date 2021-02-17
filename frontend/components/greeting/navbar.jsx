import React from 'react';
import Modal from "../modal/modal";
import { NavLink } from 'react-router-dom';
import logo from "../../../app/assets/images/PngItem_2512217.png"
import GreetingContainer from "./greeting_container";

const navBar = () => (
    <div>
      <Modal />
      
      <img className="panda-header" src="https://lazypanda-seeds.s3-us-west-1.amazonaws.com/panda+header.png"/>
      <header>
        <h1 className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
        </h1>
        <GreetingContainer/>
      </header>
    </div>
  )

  export default navBar