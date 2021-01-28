import React from 'react';
import '../css/home.css';
import {Link} from "react-router-dom";
import logo from "../src/logo.png";

class Home extends React.Component {

    state = {
        username: '',
        tweet:'',
        disable_tweet :false,
        TweetsList: []
    };

    count = 0 ;

    componentDidMount() {

    }


    addLike =()  =>{
        alert("hey : ");
        // this.state.TweetsList[e.target.key].like = this.state.TweetsList[e.target.key].like++ ;
        // document.getElementById(`like-btn${e.target.key}`).value =`liked (${this.state.TweetsList[e.target.key].like })`;
        //this.state.TweetsList[id].like = this.state.TweetsList[id].like++ ;
        //document.getElementById(`like-btn${id}`).value =`liked (${this.state.TweetsList[id].like })`;

    }
    sendTweet = (e, data)  =>{

        const tweet={
            id:this.count,
            text: data.tweet.toString(),
            retweet:0,
            like:0,
            comment:0
        }

        this.state.TweetsList[this.count++] = tweet;

        const field = document.getElementById("list_t");
        const template = document.createElement("div");
        template.setAttribute("class", "backg");
        field.parentNode.appendChild(template);

        const elem = document.createElement("div");
        elem.setAttribute("class", "item");
        elem.innerHTML = tweet.text;
        elem.innerHTML= `<table class="tweet-box"><tr class="row"><td id="txt-tw">${tweet.text}</td></tr>
                        <tr class="row">
                        <td class="col"><button class="btn foot" id="like-btn${tweet.id}" name="like">like (${tweet.like})</button></td>
                        <td class="col"><button class="btn foot" id="retweet-btn${tweet.id}" name="retweet">retweet (${tweet.retweet})</button></td>
                        <td class="col"><button class="btn foot" id="comment-btn${tweet.id}" name="comment">comment (${tweet.comment})</button></td>
                        </tr></table>`;

        template.appendChild(elem);
        this.state.tweet='';
        document.getElementById("tweet_txt").value="";

        document.getElementById(`like-btn${tweet.id}`).addEventListener("click", ()=>{
            this.state.TweetsList[tweet.id].like = ++this.state.TweetsList[tweet.id].like ;
            document.getElementById(`like-btn${tweet.id}`).innerHTML =`liked (${this.state.TweetsList[tweet.id].like })`;
        })
        document.getElementById(`retweet-btn${tweet.id}`).addEventListener("click", ()=>{
            this.state.TweetsList[tweet.id].retweet = ++this.state.TweetsList[tweet.id].retweet ;
            document.getElementById(`retweet-btn${tweet.id}`).innerHTML =`retweeted (${this.state.TweetsList[tweet.id].retweet })`;
        })
        document.getElementById(`comment-btn${tweet.id}`).addEventListener("click", ()=>{

        })

    }


    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prestate => {
            const newState = { ...prestate };
            newState[name] = value;
            document.getElementById("text_size").innerHTML=newState.tweet.length.toString()+"/250";
            if (newState.tweet.length<1 || newState.tweet.length>250){
                document.getElementById("tweet_size_warn").innerHTML="<p id='size_warn'>tweet must have 1 to 250 letters</p>";
                this.state.disable_tweet = true;
            }else {
                this.state.disable_tweet = false;
            }
            return newState;
        });
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
                                <Link to="/home"><button class="btn btn-primary menu-item">Home</button></Link>
                                <Link to="/notifications"><button class="btn btn-outline-primary menu-item">Notifications</button></Link>
                                <Link to="/profile"><button class="btn btn-outline-primary menu-item">Profile</button></Link>
                                <Link to="/welcome"><button class="btn btn-outline-primary menu-item">Log Out</button></Link>
                            </div>
                        </td>
                        <td class="col-5" colSpan="2">
                            <div id="page_center">
                                <div class="tweet">
                                    <textarea class="form-control" id="tweet_txt" name="tweet" rows="8" cols="70" placeholder="  What's happening?"
                                              onChange={this.handle_change}></textarea>
                                    <p id="text_size"></p>
                                    <div id="tweet_size_warn"></div>
                                    <button id="send_tweet_button" class="btn btn-primary" disabled={this.state.disable_tweet} onClick={e => this.sendTweet(e, this.state)}>Tweet</button>
                                </div>
                                <div class="tweet_list">
                                    <ul id="list_t">

                                    </ul>
                                </div>
                            </div>
                        </td>
                        <td class="col-3">
                            <div id="sidebar_right">
                                <input id="search_txt" type="text" size="10" class="form-control" placeholder="Search Twitter" onClick={e => this.sendTweet(e, this.state)} name="search"></input>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default Home;
