import React from 'react';

class SubpostShow extends React.Component {
    constructor(props) {
        super(props)
    }

    subpostEditandDelete() {
        if (this.props.currentUser !== null && this.props.currentUser) {
          if (this.props.currentUser.id === this.props.subpost.authorId) {
            return <div className="edit-delete-button">Edit or Delete?</div>
          }
        }
      }


    render() {
        // let AllSubposts = this.props.postSubposts.map((subpost) => {
            const { subpost, author } = this.props
            if (!subpost) return null
            if (!author) return null
            return (
                <div key={subpost.id}>
                    <ul>
                        {/* <li> {subpost.author}</li> */}
                        <li> {author.name}</li>
                        <li>{subpost.title}</li>
                        <li><img src={subpost.photo}/></li>

                    </ul>
                    {/* {this.props.currentUserId === subpost.author_id ?
                        (<div>
                            <button onClick={() => this.props.deleteSubpost(subpost.id)}>Delete </button>
                        </div>)
                    : null} */}
                    {this.subpostEditandDelete()}

                </div>
            )    
        // })
        
    
        // return (
        //     <div>
        //         {AllSubposts}               
        //     </div>
        // )
    }
}

export default SubpostShow;