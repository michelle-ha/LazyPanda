import React from 'react';

class SubpostShow extends React.Component {

    render() {
        let AllSubposts = this.props.postSubposts.map((subpost) => {

            return (
                <div key={subpost.id}>
                    <ul>
                        <li> {subpost.author}</li>
                        <li>{subpost.title}</li>
                        <li><img src={subpost.photo}/></li>

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