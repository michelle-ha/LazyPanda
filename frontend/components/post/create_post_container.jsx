import React from 'react';
import { Link } from 'react-router-dom';
import {openModal} from '../../actions/modal_actions'
import GreetingContainer from "../greeting/greeting_container"


const createPost = () => (
//   const postLinks = () => (
    <Link to="/add-new-post">
      <button type="button">Add post</button>
    </Link>
)
//   );
//   const sessionLinks = () => (
//     <button className="login-signup" onClick={() => openModal('login')}>Add post</button>
//   )

//   return currentUser ? postLinks() : sessionLinks();
// };


export default createPost;
