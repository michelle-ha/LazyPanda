import React from 'react';

class SubpostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author_id: this.props.currentUserId,
            post_id: this.props.postId
            //add pics later
            // photoFile: null,
            // photoUrl: null,
            // author_id: this.props.currentUserId,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processPost(this.state)
            // .then(() => this.props.fetchPost(this.props.postId))
            // .then(() => {
            //     this.setState({
            //         title: '',
            //         post_id: this.props.postId
            //     })
            // })
    }

    renderErrors() {

        return this.props.errors.map(error => {
          return (
          <li className="error" key={error}>
            {error}
          </li>
          );
        });
        }
      
        componentWillUnmount() {
          this.props.clearErrors()
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="string"
                    value={this.state.title}
                    placeholder="Picture title..."
                    onChange={this.update('title')}
                    className="subpost-title-input"
                />
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