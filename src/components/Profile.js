import React from 'react';
import '../css/profile.css';
import {Link} from "react-router-dom";
import avatar from '../src/avatar.png';
class Profile extends React.Component {

    render() {
        return (
            <div className="App">
                <ul>
                    <Link to="/home"><li className="sidebar">Home</li></Link>
                    <Link to="/notifications"><li className="sidebar">Notifications</li></Link>
                    <Link to="/notifications"><li className="sidebar">Profile</li></Link>
                </ul>
                <button id="tweet_button">Tweet</button>
                <h2 id="profile">Profile</h2>
                <button id="edit_photo">Edit profile photo</button>
                <button id="edit_id">Edit username</button>
                <img src={avatar} alt="Avatar" className="avatar"></img>
                <h1 id="followers">0 followers</h1>
                <h1 id="followings">0 followings</h1>
                <div className="search">
                    <input type="text" size="10" placeholder="Search Twitter" name="search"></input>
                </div>
            </div>
        );
    }
}

export default Profile;