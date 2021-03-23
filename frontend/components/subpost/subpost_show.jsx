import React from 'react';

class SubpostShow extends React.Component {

    render() {

        let AllSubposts = this.props.postSubposts.map((subpost, idx) => {
            

            return (
                <div className="post-details" key={subpost.id}>
                    <ul>
                        < li className="post-title">{idx + 1}. {subpost.title}</li>
                        <li className="subpost-author"> By: {subpost.author} </li>
                        <li className="picture-shown"><img src={subpost.photo}/></li>
                        <div className="subpost-display">
                        <i class="fas fa-heart" id="subpost"> {subpost.likeIds.length} Likes</i>
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