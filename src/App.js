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


