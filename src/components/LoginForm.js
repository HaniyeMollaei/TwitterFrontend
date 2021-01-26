import React from 'react';
import logo from '../src/logo.png';
import '../css/login.css';
import {Link} from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  /* render */
  render() {
    return (
        <div className="container">
          <img id="logo" src={logo} alt="logo"></img>
            <p id="page-name"><strong>Log in to Twitter </strong></p>
            <div className="myForm">
              <form>
                <div className="form-group">
                  <input type="text" id="email" className="form-control" placeholder="Email or username"></input>
                </div>
                <div className="form-group">
                  <input type="password" id="password" className="form-control" placeholder="Password"></input>
                </div>
                <div>
                  <button type="submit" id="login-btn" className="btn btn-primary">Log in</button>
                </div>
              </form>
            </div>
            <Link to="/signup" id="signup-link">Sign up for Twitter</Link>
        </div>
    );
  }
}

export default LoginForm;

