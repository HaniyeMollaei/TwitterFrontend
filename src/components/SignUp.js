import React, {useCallback} from 'react';
import '../css/signup.css';
import {Link} from "react-router-dom";
import logo from '../src/logo.png';
import history from "./history";
import LoginForm from "./LoginForm";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            image : 'https://uupload.ir/files/mkfe_avatar.png',
            re_pass: '',
            disable :true,
            signedUp:false
        };

    }


    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prestate => {
            const newState = { ...prestate };
            newState[name] = value;
            if ( !this.checkFields(newState)){
                newState.disable = true;
            }else{
                newState.disable = false;
            }
             if (newState.image==='' || !newState.image.includes('.')){
                 newState.image="https://uupload.ir/files/mkfe_avatar.png"
                 //
                 //https://uupload.ir/files/lwfw_logo.png
             }
                return newState;
        });
    };

    handle_signup = (e, data) => { //data includes username , email , password , re_pass

        e.preventDefault();

        if(!this.checkFields(data)){
            alert("check data");
            return;
        }

        const user = {
            email : data.email,
            username: data.username,
            password : data.password
        };

        this.setState({
            signedUp: true,
            username: data.username
        });
        alert("you are signed up on Twitter\n"+this.state.username+ "\n "+this.state.email +
            " \n"+this.state.password+" \n"+this.state.image);

        //history.push("/login" , user);
        //window.location.reload();
        this.state.signedUp=true;
        this.render();

        /*   fetch('http://157.245.160.185:8000/users/', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(user)
           }).then(res => res.json()).then(json => {
             localStorage.setItem('token', json.token);
             this.setState({
               logged_in: true,
               displayed_form: LoginForm,
               username: json.username
             });
           }).then(() => {window.location.reload(true)}); */


    };

    /* Render */
    render() {

        if(this.state.signedUp){
            const user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                image : this.state.image,
                signedUp: true
            }
            return (<div>
                <LoginForm user={user}/>
            </div>)
        }
        return (
            <div className="container">
                <img id="logo" src={logo} alt="logo"></img>
                <p id="page-name"><strong>Create your Twitter account</strong></p>
                <div className="myForm">
                    <form onSubmit={e => this.handle_signup(e, this.state)}>
                        <div className="form-group">
                            <input type="email" name="email" id="email" onChange={this.handle_change} className="form-control"
                                   placeholder="Email *"></input>
                            <div id="email_p">
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" name="username" id="username" onChange={this.handle_change}
                                   className="form-control" placeholder="Username"></input>
                            <div id="username_p">
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" onChange={this.handle_change}
                                   className="form-control" placeholder="Password *"></input>
                            <div id="password_p">
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="password" name="re_pass" id="confirm-password" onChange={this.handle_change} className="form-control"
                                   placeholder="Confirm password *"></input>
                            <div id="re_pass_p">
                            </div>
                        </div>
                        <div>
                            <div class="row" id="upload-image">
                                <div class="col align-self-end">
                                    <img id="avatar" src={this.state.image} alt="logo"></img>
                                </div>
                                <div class="col align-self-end">
                                    <input type="text" name="image" id="image-adr" onChange={this.handle_change} className="form-control"
                                           placeholder="Enter image URL"></input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" id="signup-btn" name="disable" disabled={this.state.disable} className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
                <Link to="/login" id="signup-link">Have account? Log in to Twitter</Link>
            </div>
        );
    }

    checkFields=(data) =>{

        console.log(data.email+" "+data.username+" "+data.password+" "+data.re_pass);
        if (data.email===''){
            console.log("email warning");
            document.getElementById("email_p").innerHTML= "<p class='warn' id='email_warn'>**</p>";
            return false;
        }else {
            if(document.getElementById("email_warn")!== null){document.getElementById("email_warn").remove();}
        }


        if (!data.email.includes('@') || !data.email.includes('.')){
            console.log("email warning");
            document.getElementById("email_p").innerHTML= "<p class='warn' id='email_warn'>email address is incorrect.</p>";
            return false;
        }else {
            if(document.getElementById("email_warn")!== null){document.getElementById("email_warn").remove();}
        }


        if (data.username.toString() !== '' &&(data.username.toString().length >16 || data.username.toString().length < 6)){
            console.log("username warning");
            document.getElementById("username_p").innerHTML= "<p class='warn' id='username_warn'>Username should have 6 to 16 letter.</p>";
            return false;
        }else {
            if(document.getElementById("username_warn")!== null){document.getElementById("username_warn").remove();}
        }



        if (data.password.toString() ===''){
            console.log("password warning 1");
            document.getElementById("password_p").innerHTML= "<p class='warn' id='password_warn'>**</p>";
            return false;
        }else {
            if(document.getElementById("password_warn")!== null){document.getElementById("password_warn").remove();}
        }

        if(data.password.toString().length > 16 || data.password.toString().length < 6){
            console.log("password warning 2");
            document.getElementById("password_p").innerHTML= "<p class='warn' id='password_warn'>Password should have 6 to 16 letter.</p>";
            return false;
        }else {
            if(document.getElementById("password_warn")!== null){document.getElementById("password_warn").remove();}
        }


        if (data.re_pass.toString() ===''){
            console.log("re-pass warning 1");
            document.getElementById("re_pass_p").innerHTML= "<p class='warn' id='re_pass_warn'>**</p>";
            return false;
        }else {
            if(document.getElementById("re_pass_warn")!== null){document.getElementById("re_pass_warn").remove();}
        }

        if((data.re_pass.toString().length !== data.password.toString().length ) ||
            (data.password.toString() !== data.re_pass.toString())){
            console.log("re-pass warning 2");
            document.getElementById("re_pass_p").innerHTML= "<p class='warn' id='re_pass_warn'>Passwordes don't match.</p>";
            return false;
        }else {
            if(document.getElementById("re_pass_warn")!== null){document.getElementById("re_pass_warn").remove();}
        }


        console.log("it's okey");
        return true;
    }


}

export default SignupForm;

