import React from 'react';
import '../css/notifications.css';
import {Link} from "react-router-dom";
import logo from "../src/logo.png";

class Notifications extends React.Component {

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
                                    <button class="btn btn-primary menu-item">Notifications</button>
                                </Link>
                                <Link to="/profile">
                                    <button class="btn btn-outline-primary menu-item">Profile</button>
                                </Link>
                                <Link to="/profile">
                                    <button class="btn btn-outline-primary menu-item">Log out</button>
                                </Link>
                                {/*<button id="tweet_button">Tweet</button>*/}
                            </div>
                        </td>
                        <td class="col-5" >
                            <div id="page_center">
                                <ul className="pagination">
                                    <a href="#">All</a>
                                    <a className="active" href="#">mentions</a>
                                </ul>
                            </div>
                        </td>
                        <td class="col-3">
                            <div id="sidebar_right">

                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Notifications;
