import React from 'react';
import logo from '../src/logo.png';
import '../css/login.css';
import {Link} from "react-router-dom";
import history from "./history";

class LoginForm extends React.Component {
  state = {
    username: '',
    email : '',
    password: ''
  };

  handle_login = (e, data) => {
    console.log("on submit : "+data.email+"  "+data.password);
    e.preventDefault();
    if (data.email.toLowerCase()==="haniyemollaei" && data.password.toString()==="123456"){
      console.log("matched")
      history.push("/home" , this.state);
      window.location.reload();
    }
    console.log("not matched")
    /*fetch('http://157.245.160.185:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          try {
            this.setState({
              logged_in: localStorage.getItem('token'),
              username: data.username
            });
            history.push("/home" , this.state);
            window.location.reload();
          } catch(e) {
            console.log(e);
          }
        });

     */
  };


  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prestate => {
      const newState = { ...prestate };
      newState[name] = value;
      console.log("name : "+name+ " value : "+value);
      console.log(newState.email+"  "+newState.password);
      console.log("inputs : "+ document.getElementById("email").innerText);
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
              <form onSubmit={e => this.handle_login(e, this.state)}>
                <div className="form-group">
                  <input type="text" id="email" className="form-control" placeholder="Email or username" name="email" onChange={this.handle_change}></input>
                </div>
                <div className="form-group">
                  <input type="password" id="password" className="form-control" placeholder="Password" name="password" onChange={this.handle_change}></input>
                </div>
                <div id="warning"></div>
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

