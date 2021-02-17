import React from 'react';
import Modal from "../modal/modal";
import { NavLink } from 'react-router-dom';
import logo from "../../../app/assets/images/PngItem_2512217.png"
import GreetingContainer from "./greeting_container";
import PostIndexContainer from "../post/post_index_container"


const signin = () => (
    <div>
      <Modal />
      <header className="panda-header">
        <div className="panda-laptop"></div>
      </header>
      <header>
        <div className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
        </div>
        <div className="form-buttons">
        <GreetingContainer/>
        </div>
      </header>
      <div className="line-break"></div>
      <PostIndexContainer/>

    </div>
  )

  export default signin