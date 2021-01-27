import{
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import React, { Component } from 'react';
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUp";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem('token'),
      username: ''
    };
  }




  handle_logout = () => {
    <Link to="/login"/>
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: ''});
  };

  handle_signup = (e, data) => {
    console.log(data);
  };

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8080/token-auth/', {
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
              username: json.user.username
            });

            window.location.reload();
          } catch (e) {
            console.log(e);
          }
        });
  };



  render() {

    /* return */
    return (
        <Router>
        <div>
          <Switch>

            <Route path="/login">
              <LoginForm />
            </Route>

            <Route path="/signup">
              <SignupForm />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
   <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>

            <Route path="/">
              <Welcome />
            </Route>


          </Switch>
        </div>
        </Router>
    );
  }

}
  export default App;


