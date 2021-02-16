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
    this.handleFile = this.handleFile.bind(this);

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
    formData.append('post[title]', this.state.title);
    formData.append('post[body]', this.state.body);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.createPost(formData)
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
    const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null;

    return (
        <div>

      <div className="errors">{this.renderErrors()}</div>

      <form className="post-form" onSubmit={ this.handleSubmit }>
      <h1 className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
          <GreetingContainer/>
        </h1>
        <div className="button-holder">
              <h3>Image preview </h3>
              {preview}
              <h3 className="button-holder">Add a Picture</h3>
              <input type="file" className="new-post-button"
                onChange={this.handleFile.bind(this)}/>
            </div>
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