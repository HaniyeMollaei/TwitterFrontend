import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import React, { Component } from 'react';
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUp";
import Welcome from "./components/Welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token'),
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8080', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
          .then(res => res.json())
          .then(json => {
            this.setState({username: json.username});
          });
    }
  }

  handle_logout = () => {
    <Link to="/login"/>
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: ''});
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


  display_form = form => {
    this.setState({
      displayed_form: form
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


