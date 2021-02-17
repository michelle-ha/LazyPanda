import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../app/assets/images/PngItem_2512217.png"

const edit_navBar = () => (
    <div>
      <header className="panda-header">
        <div className="panda-laptop"></div>
      </header>
      <header>
        <div className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
        </div>
      </header>
      <div className="line-break"></div>
    </div>
  )

  export default edit_navBar