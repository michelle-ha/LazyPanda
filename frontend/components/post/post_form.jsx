import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../../app/assets/images/PngItem_2512217.png"
import GreetingContainer from "../greeting/greeting_container";



class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      photoFile: null,
      photoUrl: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state)
    .then( () => this.props.history.push("/"));
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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

  render() {

    return (
        <div>

      <div className="errors">{this.renderErrors()}</div>

      <form className="post-form" onSubmit={ this.handleSubmit }>
      <h1 className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
          <GreetingContainer/>
        </h1>
        <h1>New Post</h1>
          <label>Title:
            <input type="string"
                value={this.state.title}
                placeholder="Post title..."
                onChange={this.update('title')}
                className="post-title-input"
              />
          </label>
          <label>Body:
            <textarea
              value={ this.state.body }
              placeholder="Tell us your story here..."
              onChange={ this.update('body') }
              className="post-body-input"
              ></textarea>
          </label>
          <button className="post-button">Create Post</button>
      </form>
      <Link to="/">Delete Post</Link>
      </div>
    );
  }
}

export default withRouter(PostForm);