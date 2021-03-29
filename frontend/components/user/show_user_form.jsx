import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../greeting/navbar"


class ShowUser extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchPosts();
    }



    render () {
        let showUser = this.props.showUser;

        if (!showUser) {
            return null;

        } else {

            let showPosts = this.props.posts.map(post => 
                (this.props.showUser.id === post.author_id ?

                    <div key={post.id}>
                        <li className="postLinks"><Link to={`/${post.id}`}>{post.title}</Link>
</li>
                    </div>

                    : null 
                )

            )



            
        return (
            <div>
                        <NavBar/>

            <div className="picture-edit-container">
                <form className="picture-edit-form" >
                    <h1 className="profile-pic-heading"> {this.props.showUser.name}'s Page</h1>
                    <div className="pic-holder">
                        <img className="profile-pic-edit" src = { this.props.showUser.profilePicURL } />
                    </div>
                    <h3 className="button-holder">All Posts</h3>
                    {showPosts}
                    <div className="go-back-link-edit" ><Link to="/" className="go-back">Go Back</Link></div>
                </form>
            </div>
            </div>
        )
        }
    }
}

export default ShowUser;