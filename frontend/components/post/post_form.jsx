import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../../app/assets/images/PngItem_2512217.png"
import GreetingContainer from "../greeting/greeting_container";
import NavBar from "../greeting/navbar"



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
      <div >
        <div className="errors">{this.renderErrors()}</div>
        <form className="post-form" onSubmit={ this.handleSubmit }>
        <h1 className="logo">
          <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
        </h1>
          <div className="post-creator">
            <div className="post-creator-container">
            <input type="string"
                value={this.state.title}
                placeholder="Post title..."
                onChange={this.update('title')}
                className="post-title-input"
              />
            <textarea
              value={ this.state.body }
              placeholder="Tell us your story here..."
              onChange={ this.update('body') }
              className="post-body-input"
              ></textarea>
            <div className="button-holder">
              {preview}
              <h3 className="button-holder">Upload photo</h3>
              <input type="file" className="new-post-button"
                onChange={this.handleFile.bind(this)}/>
            </div>
          <button className="post-button">Create Post</button>
          </div>
          </div>
        </form>
      <Link to="/">Delete Post</Link>
      </div>
    );
  }
}

export default withRouter(PostForm);