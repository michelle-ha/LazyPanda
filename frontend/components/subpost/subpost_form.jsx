import React from 'react';

class SubpostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author_id: this.props.currentUserId,
            post_id: this.props.postId,
            photoFile: null,
            photoUrl: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    }

    
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('subpost[title]', this.state.title);
        formData.append('subpost[author_id]', this.state.author_id);
        formData.append('subpost[post_id]', this.state.post_id)



        if (this.state.photoFile) {
        formData.append('subpost[photo]', this.state.photoFile);
        }

        this.props.processPost(this.state)
            // .then(() => this.props.fetchPost(this.props.postId))
            // .then(() => {
            //     this.setState({
            //         title: '',
            //         post_id: this.props.postId
            //     })
            // })
    }

    // renderErrors() {

    //     return this.props.errors.map(error => {
    //       return (
    //       <li className="error" key={error}>
    //         {error}
    //       </li>
    //       );
    //     });
    //     }
      

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} height="200px" width="200px" /> : null;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="string"
                    value={this.state.title}
                    placeholder="Picture title..."
                    onChange={this.update('title')}
                    className="subpost-title-input"
                />

            {/* <div className="button-holder">
              {preview}
              <h3 className="button-holder">Upload photo</h3>
              <input type="file" className="new-post-button"
                onChange={this.handleFile.bind(this)}/>
            </div> */}
                {this.props.currentUser ?
                        (<div>
                            <input type="submit" value="Write a response" />
                        </div>)
                    : (<div>
                        <button onClick={() => this.props.openModal()}>Sign in to write a Response </button>
                    </div>)}
                </form>
            </div>
        )
    }
}

export default SubpostForm;