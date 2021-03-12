import React from 'react';

class SubpostShow extends React.Component {

    render() {

        let AllSubposts = this.props.postSubposts.map((subpost) => {
            

            return (
                <div className="post-details" key={subpost.id}>
                    <ul>
                        < li className="post-title">{subpost.title}</li>
                        <li className="picture-shown"><img src={subpost.photo}/></li>
                        By: {subpost.author}


                    </ul>
                    {this.props.currentUserId === subpost.author_id ?
                        (<div>
                            <button onClick={() => this.props.deleteSubpost(subpost.id)}>Delete </button>
                        </div>)
                    : null}
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