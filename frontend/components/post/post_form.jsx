import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    //   photos: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post)
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
      <form className="post-form" onSubmit={ this.handleSubmit }>
        <div className="errors">{this.renderErrors()}</div>

        <h1>New Post</h1>
          <label>Title:
            <input type="string"
                value={this.state.title}
                onChange={this.update('title')}
                className="post-input"
              />
          </label>
          <label>Body:
            <textarea
            //   cols='20'
              value={ this.state.body }
            //   rows='5'
            //   placeholder="2% or whatever is on sale!"
              onChange={ this.update('body') }
              className="input"
              ></textarea>
          </label>

          <button className="create-button">Create Post!</button>
      </form>

    );
  }
}

export default PostForm;