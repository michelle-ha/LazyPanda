import React from 'react';

class SubpostShow extends React.Component {

    render() {

        let AllSubposts = this.props.postSubposts.map((subpost, idx) => {
            

            return (
                <div className="post-details" key={subpost.id}>
                    <ul>
                        < li className="post-title">{idx + 1}. {subpost.title}</li>
                        <li className="picture-shown"><img src={subpost.photo}/></li>
                        <div className="subpost-display">
                        <li className="subpost-author"> By: {subpost.author} </li>
                        {this.props.currentUserId === subpost.author_id ?
                        (<div>
                            <button className="delete-link" onClick={() => this.props.deleteSubpost(subpost.id)}>Delete </button>
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