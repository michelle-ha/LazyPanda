import React from 'react';

class ReviewForm extends React.Component {
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

    
    // renderErrors() {

    //     return this.props.errors.map(error => {
    //         return (
    //             <li className="error" key={error}>
    //                 {error}
    //             </li>
    //         );

    //     });
    // }
  
    componentWillUnmount() {
      this.props.clearErrors()
  }

    render() { 
        return (
            <div className="review-form">
                {/* <div className="errors">{this.renderErrors()}</div> */}
                <form onSubmit={this.handleSubmit}>
                <div className="send-button">
                <textarea className="review-content-input"  type="text" value={this.state.content} placeholder="Add a comment..." onChange={this.update('content')}></textarea>
                {this.props.currentUser ?
                        (<div>
                            <button type="submit"><i class="fas fa-paper-plane"></i></button>
                        </div>)
                    : (<div>
                        <button onClick={() => this.props.openModal()}><i class="fas fa-paper-plane"></i></button>
                    </div>)}
                </div>
                </form>
            </div>
        )
    }
}

export default ReviewForm;