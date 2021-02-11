import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
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

  demoLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    const guest = {email: "guest@gmail.com", password: "password" }
    this.props.processForm(guest).then(this.props.closeModal)
  }

  render() {

    let test = (<> </>)
    
    if (this.props.formType === "signup") {
        test = 
        <>
            <label>Full Name:
                <input type="string"
                value={this.state.name}
                onChange={this.update('name')}
                className="signin-input"
                />
            </label>
            <br/>
        </>
    }
    let formMessage = (<> </>)
    
    if (this.props.formType === "signup") {
        formMessage = 
        <>
            Have an account? {this.props.otherForm}
        </>
    } else {
        formMessage = 
        <>
            Don't have an account? {this.props.otherForm}
        </>    
    }

    let demoButton = (<></>)
    
    if (this.props.formType === "login") {
        demoButton = 
        <>
          <a onClick={this.demoLogin}>Demo log in</a>
        </>
        }
    
    let text = (<></>)

    if (this.props.formType === "login") {
      text = "Log in" 
    } else if (this.props.formType === "signup") {
      text = "Sign up"
    }


    return (
      <div className="login-form-container">
        
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1 className="modal-header">Let's fight boredom together!</h1>
          <div onClick={this.props.closeModal} className="close-x">&#10006;</div>
          {this.renderErrors()}
          <div className="login-form">
            {test}
            <label>Email:
              <input type="string"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <div className= "modal-footer">
              <input className="session-submit" type="submit" value={text} />
                  <ul >
                    <li className="registration-link">{formMessage}</li>
                    <li className="registration-link">{demoButton}</li>
                  </ul>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
