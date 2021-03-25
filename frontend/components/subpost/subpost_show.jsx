import React from 'react';
import LikeButton from "../likes/like_button"

class SubpostShow extends React.Component {

    render() {

        let AllSubposts = this.props.postSubposts.map((subpost, idx) => {
       
            

            return (
                <div className="post-details" key={subpost.id}>
                    <ul>
                        < li className="post-title">{idx + 1}. {subpost.title}</li>
                        <div className="subpost-show">
                            <li className="show-item-author"> By: {subpost.author} </li>
                            <img className="profile-pic-show" src={subpost.profilePicURL}/>
                        </div>
                        
                        <li className="picture-shown"><img src={subpost.photo}/></li>
                        <div className="subpost-display">
                        <div className="subpost-likes">
                            <LikeButton likeable_id={subpost.id} likeable_type={'Subpost'} author_id={this.props.currentUserId} /> 
                            <span>{subpost.likeIds.length} Likes</span>
                        </div>
                        

                            {this.props.currentUserId === subpost.author_id ?
                                (<div>
                                    <button className="delete-icon" onClick={() => this.props.deleteSubpost(subpost.id)}><i class="fas fa-trash"></i> </button>
                                </div>)
                            : null}
                    </div>
                    </ul>
                    
                </div>
            )    
        })
        
    
        return (
            <div>
                {AllSubposts}               
            </div>
        )
    }
}

export default SubpostShow;