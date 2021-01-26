import React from 'react';
import '../css/signup.css';
import {Link} from "react-router-dom";
import logo from '../src/logo.png';

class SignupForm extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        re_pass: ''
    };

    handle_signup = (e, data) => {
        console.log(data);
    };

    check = (e, data) => {
        console.log(data);
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prestate => {
            const newState = { ...prestate };
            newState[name] = value;
            return newState;
        });
    };

    /* Render */
    render() {
        return (
            <div className="container">
                <img id="logo" src={logo} alt="logo"></img>
                <p id="page-name"><strong>Create your Twitter account</strong></p>
                <div className="myForm">
                    <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                        <div className="form-group">
                            <input type="email" name="email" id="email" onChange={this.handle_change} className="form-control"
                                   placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <input type="text" name="username" id="username" onChange={this.handle_change} className="form-control" placeholder="Username"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" onChange={this.handle_change} className="form-control"
                                   placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" name="re_pass" id="confirm-password" onChange={this.handle_change} className="form-control"
                                   placeholder="Confirm password"></input>
                        </div>
                        <div>
                            <button type="submit" id="signup-btn" onClick={this.check} className="btn btn-primary">Log in</button>
                        </div>
                    </form>
                </div>
                <Link to="/login" id="signup-link">Have account? Log in to Twitter</Link>
            </div>
        );
    }
}

export default SignupForm;

