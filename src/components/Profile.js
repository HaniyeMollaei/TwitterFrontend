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
                                <Link to="/notifications">
                                    <button class="btn btn-outline-primary menu-item">Notifications</button>
                                </Link>
                                <Link to="/profile">
                                    <button class="btn btn-primary menu-item" >Profile</button>
                                </Link>
                                <Link to="/welcome">
                                    <button class="btn btn-outline-primary menu-item">Log out</button>
                                </Link>
                            </div>
                        </td>
                        <td class="col-7" >
                            <div id="page_center">
                                <h2 id="profile" >Profile</h2>

                                <tr class="row top-row">
                                    <td class="col">
                                        <img onClick={() => this.refs.fileInput.click()}
                                             src={avatar} alt="Avatar" class="avatar top-row" ></img>
                                    </td>
                                    <td className="col">
                                        <tr className="row">
                                            <h2 id="followers">0 followers</h2>
                                        </tr>
                                        <tr className="row">
                                            <h2 id="followings">0 followings</h2>
                                        </tr>
                                    </td>
                                </tr>

                                <tr className="row">
                                    <td class="col">
                                        <button className="btn btn-primary" id="edit_photo"
                                                onClick={() => this.refs.fileInput.click()}>Edit profile photo
                                        </button>
                                    </td>
                                    <td class="col">
                                        <button className="btn btn-primary" id="edit_id"
                                                onClick={this.togglePopup.bind(this)}>Edit username
                                        </button>
                                    </td>
                                </tr>


                                <input
                                    ref="fileInput"
                                    onChange={this.handleFileUpload}
                                    type="file"
                                    style={{display: "none"}}
                                />


                                {this.state.showPopup ?
                                    <Popup
                                        closePopup={this.togglePopup.bind(this)}
                                    />
                                    : null
                                }
                                    <input
                                        ref="fileInput"
                                        onChange={this.handleFileUpload}
                                        type="file"
                                        style={{display: "none"}}
                                        // multiple={false}
                                    />
                            </div>
                        </td>

                    </tr>
                </table>
            </div>
        );
    }
}

export default Profile;
