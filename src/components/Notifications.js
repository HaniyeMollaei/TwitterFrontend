import React from 'react';
import '../css/notifications.css';
import {Link} from "react-router-dom";

class Notifications extends React.Component {

    render() {
        return (
            <div className="App">
                <ul>
                    <Link to="/home"><li className="sidebar">Home</li></Link>
                    <Link to="/notifications"><li className="sidebar">Notifications</li></Link>
                    <Link to="/notifications"><li className="sidebar">Profile</li></Link>
                </ul>
                <button id="tweet_button">Tweet</button>
                <h2 id="notifications">Notifications</h2>
                <ul className="pagination">
                    <a href="#">All</a>
                  <a className="active" href="#">mentions</a>
                </ul>

                <div className="search">
                    <input type="text" size="10" placeholder="Search Twitter" name="search"></input>
                </div>
            </div>
        );
    }
}

export default Notifications;