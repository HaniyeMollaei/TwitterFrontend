import React from 'react';
import '../css/home.css';
import {Link} from "react-router-dom";

class Home extends React.Component {

    state = {
        username: '',
        tweet:'',
        disable_tweet :false

    };

    sendTweet = (e, data)  =>{
        const elem = document.createElement("div");
        elem.setAttribute("class", "item");
        elem.innerHTML = data.tweet.toString();

        document.getElementById("tweet_list").appendChild(elem);

    }
    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prestate => {
            const newState = { ...prestate };
            newState[name] = value;
            document.getElementById("text_size").innerHTML=newState.tweet.length.toString();
            if (newState.tweet.length<1 || newState.tweet.length>10){
                document.getElementById("tweet_size_warn").innerHTML="<p class='warn' id='size_warn'>tweet must have 1 to 250 letters</p>";
                this.state.disable_tweet = true;
            }else {
                this.state.disable_tweet = false;
            }
            console.log("tweet : "+ value);
            return newState;
        });
    };


    render() {
    return (
        <div className="App">
            <h2 id="home">Home</h2>
            <div id="sidebar_home">
                <ul>
                    <Link to="/home"><li className="sidebar">Home</li></Link>
                    <Link to="/notifications"><li className="sidebar">Notifications</li></Link>
                    <Link to="/notifications"><li className="sidebar">Profile</li></Link>
                </ul>
                <button id="tweet_button">Tweet</button>
            </div>

            <div id="page_center">
                <div class="tweet">
                    <textarea id="tweet_txt" name="tweet" rows="8" cols="70" placeholder="  What's happening?" onChange={this.handle_change}></textarea>
                    <p id="text_size"></p>
                    <div id="tweet_size_warn"></div>
                    <button id="send_tweet_button" disabled={this.state.disable_tweet}>Tweet</button>
                </div>
                <div class="tweet_list">

                </div>
            </div>

            <div id="sidebar_search">
                <div class="search">
                    <input id="search_txt" type="text" size="10" placeholder="Search Twitter" onClick={e => this.handle_signup(e, this.state)} name="search"></input>
                </div>
            </div>
        </div>
    );
    }
}
export default Home;
