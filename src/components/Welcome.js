import React from 'react';
import '../css/welcome.css';
import {Link} from "react-router-dom";
import twi from "../src/twi.png";

class Welcome extends React.Component {


    render() {
        return(
            <div className="welcome-pg">
                <ol className="about_twitter">
                    <li className="first">Follow your interests.</li>
                    <li className="second">Hear what people are talking about.</li>
                    <li className="third">Join the conversation.</li>
                </ol>
                <div>
                    <img className="card" alt="logo" src="https://mulder-onions.com/wp-content/uploads/2017/02/White-square.jpg"></img>
                    <div className="title">See what's happening in the world right now.</div>
                    <div>
                        <img className="bacjground" alt="logo" src={twi}></img>
                        <div id="join">Join Twitter today.</div>
                        <Link to="/signup"><button id="sign_up-btn">Sign Up</button></Link>
                        <Link to="../login"><button id="log_in-btn">Log In</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Welcome;
