import React from 'react';
import Modal from "../modal/modal";
import { NavLink } from 'react-router-dom';
import logo from "../../../app/assets/images/PngItem_2512217.png"
import GreetingContainer from "./greeting_container";
import PostIndexContainer from "../post/post_index_container"


const signin = () => (
    <div>
      <Modal />
      <header>
        <h1 className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
        </h1>
        <GreetingContainer/>
      </header>
      <PostIndexContainer/>

    </div>
  )

  export default signin