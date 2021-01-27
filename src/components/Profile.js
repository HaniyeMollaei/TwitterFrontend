import React from 'react';
import '../css/profile.css';
import {Link} from "react-router-dom";
import avatar from '../src/avatar.png';
import logo from "../src/logo.png";
class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <text>Enter new username:</text>
                    <input  type="text" id="new_username"></input>
                    <button onClick={this.props.closePopup}>done</button>
                </div>
            </div>
        );
    }
}
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    handleFileUpload = event => {
        console.log(event.target.files[0].name);
    };
    render() {
        return (
            <div>
                <table id="main_table">
                    <tr class="row">
                        <td class="col" colSpan="4">
                            <h2 id="home">Twitter</h2>
                        </td>
                    </tr>
                    <tr class="row">
                        <td class="col-4">
                            <div id="sidebar_left">
                                <img id="logo-home" src={logo} alt="logo"></img>
                                <Link to="/home">
                                    <button class="btn btn-outline-primary menu-item">Home</button>
                                </Link>
                                <br/>
                                <Link to="/notifications">
                                    <button class="btn btn-outline-primary menu-item">Notifications</button>
                                </Link>
                                <br/>
                                <Link to="/profile">
                                    <button class="btn btn-outline-primary menu-item">Profile</button>
                                </Link>
                                <Link to="/profile">
                                    <button class="btn btn-outline-primary menu-item">Log out</button>
                                </Link>
                                <br/>
                                {/*<button id="tweet_button">Tweet</button>*/}
                            </div>
                        </td>
                        <td class="col-5" colSpan="2">
                            <div id="page_center">
                                <h2 id="profile">Profile</h2>
                                <React.Fragment>
                                    <input
                                        ref="fileInput"
                                        onChange={this.handleFileUpload}
                                        type="file"
                                        style={{display: "none"}}
                                        // multiple={false}
                                    />
                                    <button onClick={() => this.refs.fileInput.click()} id="edit_photo">Edit profile photo</button> </React.Fragment>
                                <button id="edit_id" onClick={this.togglePopup.bind(this)}>Edit username</button>
                                {this.state.showPopup ?
                                    <Popup
                                        closePopup={this.togglePopup.bind(this)}
                                    />
                                    : null
                                }
                                <React.Fragment>
                                    <input
                                        ref="fileInput"
                                        onChange={this.handleFileUpload}
                                        type="file"
                                        style={{display: "none"}}
                                        // multiple={false}
                                    />
                                    <img onClick={() => this.refs.fileInput.click()}
                                         src={avatar} alt="Avatar" className="avatar"></img> </React.Fragment>
                                <h1 id="followers">0 followers</h1>
                                <h1 id="followings">0 followings</h1>
                            </div>
                        </td>
                        <td class="col-3">
                            <div id="sidebar_right">
                                <input id="search_txt" type="text" size="10" class="form-control"
                                       placeholder="Search Twitter"
                                       name="search"></input>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Profile;
