import React from 'react';
import PostIndexItem from './post_index_item_container';
// import ReviewShowContainer from "../review/review_show_container"
import {Search} from "./post_search_fxn"
// import { Link } from 'react-router-dom';
import NavBar from "../greeting/navbar"




class PostSearches extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    const users = this.props.users;

    const postIndexItems = this.props.posts.map(post => (
      <PostIndexItem
        key={post.id}
        post={post}
        user={users[post.author_id]}

        />

      )
    );


    return(
      <div className="post-index">
                  <NavBar/>

        <Search posts={this.props.posts}/>
        {/* <div className="go-back-link"><Link to="/" className="go-back">Go Back</Link></div> */}
        {/* <ul className="post-list">
          <div>{postIndexItems}</div> 
        </ul> */}
        {/* <ReviewShowContainer post={this.props.post}/> */}
      </div>
    );
  }
}

export default PostSearches;