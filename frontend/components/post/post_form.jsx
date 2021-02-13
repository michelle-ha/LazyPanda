import React from 'react';
import { withRouter } from 'react-router';


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      photoFile: null,
      photoUrl: null
    //   photos: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   componentDidMount() {
//       const {isDataSubmitted, history} = this.props;
//       if (isDataSubmitted) {
//           history.push('/')
//       }
//   }



  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post);
    // this.props.history.push('/')
    }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
        <div>
      <form className="post-form" onSubmit={ this.handleSubmit }>
        <div className="errors">{this.renderErrors()}</div>
        
        <h1>New Post</h1>
          <label>Title:
            <input type="string"
                value={this.state.title}
                onChange={this.update('title')}
                className="post-title-input"
              />
          </label>
          <label>Body:
            <textarea
              value={ this.state.body }
              onChange={ this.update('body') }
              className="post-body-input"
              ></textarea>
          </label>
        <button className="create-button" >Create Post!</button>
        
      </form>
      </div>
    );
  }
}

export default withRouter(PostForm);