import React from 'react';

class SubpostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: '',
            author_id: this.props.currentUserId,
            post_id: this.props.postId,
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
            .then(() => this.props.fetchPost(this.props.postId))
            .then(() => {
                this.setState({
                    title: '',
                    post_id: this.props.postId,
                    author_id: this.props.currentUserId,
                    post_id: this.props.postId
                })
            })
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
            <div className="review-form">
                <div className="errors">{this.renderErrors()}</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="string"
                        value={this.state.content}
                        placeholder="Comment here..."
                        onChange={this.update('content')}
                        className="review-content-input"
                />
                {this.props.currentUser ?
                        (<div>
                            <input type="submit" value="Write a comment" />
                        </div>)
                    : (<div>
                        <button className= "sub-post-signin" onClick={() => this.props.openModal()}>Sign in to write a Response </button>
                    </div>)}
                </form>
            </div>
        )
    }
}

export default SubpostForm;