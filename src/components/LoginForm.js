import React from 'react';
import logo from '../src/logo.png';
import '../css/login.css';
import {Link} from "react-router-dom";
import history from "./history";

class LoginForm extends React.Component {
  state = {
    email : '',
    password: ''
  };


  /*componentDidMount() {
    // console.log("Mount : " + this.props.user.username)
    // this.initFields();
    if (this.state.logged_in) {
      fetch('http://157.245.160.185:8000/tcapi/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
          .then(res => res.json())
          .then(json => {
            this.setState({ username: json.username, id: json.id});
          });
    }
  }*/
  initFields = () => {
    this.state.email =  this.props.user.email;
    this.state.password = this.props.password ;
    console.log("email : "+ this.props.user.email + " pass : "+ this.props.user.password);
    document.getElementById("email").value = this.props.user.email;
    //document.getElementById("password").value = this.props.user.password;
  }


  handle_login = (e, data) => {

    const user ={
      userEmail : this.state.email,
      password : this.state.password,
    };
    alert("log: stringified user : " + JSON.stringify(user));
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }

    fetch('https://localhost:5001/api/User/signIn', requestOptions )

        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          //alert("jdata " + jsonData.token)
          localStorage.setItem('token', jsonData.token);
          alert("log: token : " + localStorage.getItem("token"));
          history.push("/home");
          window.location.reload();
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })

    alert("log: fetched : " + localStorage.getItem("token"));



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

