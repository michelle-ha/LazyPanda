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
        <div>
      {/* <div className="errors">{this.renderErrors()}</div> */}

      <form className="post-form" onSubmit={ this.handleSubmit }>
      <NavBar/>

        <h1>Edit Post</h1>
        {preview}
        <input type="file"
               onChange={this.handleFile}/>
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
          <button className="post-button">Edit Post</button>


      </form>
      <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default withRouter(PostEditForm);