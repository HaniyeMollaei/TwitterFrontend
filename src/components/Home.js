import React from 'react';
import '../css/home.css';
import {Link} from "react-router-dom";

class Home extends React.Component {
     data = [{"name": "test1"}, {"name": "test2"}];
    // eslint-disable-next-line no-undef
   //  listItems = data.map((d) => <li className="tweets" key={d.name}>{d.name}</li>);
//     for (let i = 0; i < data.length; i++) {
//     listItems.push(
// <li className="tweets" key={data.map.name}>{data.map.name}</li>
// );
    render() {
    return (
        <div className="App">
            <ul>
                <Link to="/home"><li className="sidebar">Home</li></Link>
                <Link to="/notifications"><li className="sidebar">Notifications</li></Link>
                <Link to="/notifications"><li className="sidebar">Profile</li></Link>
            </ul>
            <button id="tweet_button">Tweet</button>
            <h2 id="home">Home</h2>
            <div className="tweet">
                <textarea rows="8" cols="70" placeholder="  What's happening?"></textarea>
                <button id="send_tweet_button">Tweet</button>
                <div className="search">
                    <input type="text" size="10" placeholder="Search Twitter" name="search"></input>
                </div>
            </div>
            <div>
                {/*{listItems}*/}
            </div>
        </div>
    );
    }
}
export default Home;
