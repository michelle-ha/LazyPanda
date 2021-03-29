import React from 'react';
import { Link } from 'react-router-dom';

class ShowUser extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
            .fail(() => this.props.history.push("/"))

        this.props.fetchPosts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId)
                .fail(() => this.props.history.push("/"))
        }
    }

    render () {
        let showUser = this.props.showUser;

        if (!showUser) {
            return null;

        } else {

            let showPosts = this.props.posts.map(post => 
                (this.props.showUser.id === post.author_id ?

                    <div key={post.id}>
                        {/* <h1>User Posts:</h1> */}
                        <Link to={`/${post.id}`}>{post.title}</Link>
                    </div>

                    : "No Posts" 
                )
            )

            
            return (
                <div className="showUserBody">

                    <br />
                    <p>{this.props.showUser.name}'s Page</p>
                    <br />
                    <img className="showUserProfilePic" src={this.props.showUser.profilePicURL}/>
                    <br />
                    <br />

                    <p>All Posts</p>
                    
                    {showPosts}
                    
                    <div>
                        <Link to="/">Back to Main Page</Link>
                    </div>
                    <br />
                    
                </div>
            )
        }
    }
}

export default ShowUser;