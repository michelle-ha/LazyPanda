import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../../app/assets/images/PngItem_2512217.png"
import NavBar from "../greeting/navbar"

// import GreetingContainer from "../greeting/greeting_container";

class PostEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body,
      id: this.props.post.id,
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
    formData.append('post[id]', this.state.id);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }

    this.props.updatePost(formData)
    .then( () => this.props.history.push("/"));

  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // renderErrors() {

  // return this.props.errors.map(error => {
  //   return (
  //   <li className="error" key={error}>
  //     {error}
  //   </li>
  //   );
  // });
  // }

  render() {

    const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null;

    return (

      <div >
      {/* <div className="errors">{this.renderErrors()}</div> */}
      <form className="post-form" onSubmit={ this.handleSubmit }>
      <h1 className="logo">
        <NavLink to="/" activeClassName="active"><img className= "panda-logo" src={logo} /></NavLink>
      </h1>
        <div className="post-creator">
          <div className="post-creator-container">
          <input type="string"
              value={this.state.title}
              onChange={this.update('title')}
              className="post-title-input"
            />
          <textarea
            value={ this.state.body }
            onChange={ this.update('body') }
            className="post-body-input"
            ></textarea>
          <div className="button-holder">
            {preview}
            <h3 className="button-holder">Upload photo</h3>
            <input type="file" className="new-post-button"
              value={ this.state.photo }
              onChange={this.handleFile.bind(this)}/>
          </div>
        <button className="post-button">Edit Post</button>
        </div>
        </div>
        <Link to="/">Go Back</Link>
      </form>
    </div>
  );
}
}

export default withRouter(PostEditForm);