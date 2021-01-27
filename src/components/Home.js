import React from 'react';
import '../css/home.css';
import {Link} from "react-router-dom";

class TweetsList extends React.Component {
    render() {
        return (
            <ul id="tweets_list">
                {Object.keys(this.props.eachTweet).map((index) => {
                    return (
                        <li name={index}>{this.props.eachTweet[index]}</li>
                    );
                })}
            </ul>
        );
    }
}

class TweetBox extends React.Component {
    sendTweet(e) {
        e.preventDefault();
        let newTweet = this.refs.item.value;
        if (newTweet !== '') {
            this.props.addTweet(newTweet);
            this.refs.item.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={e => this.sendTweet(e)}>
                <input placeholder="what's happening?" type="text" id="tweet" ref="item"/><br/>
                <button type="submit"  id="send_tweet_button">Tweet</button>
            </form>
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TweetsList: []
        };
        this.addTweetToList = this.addTweetToList.bind(this);
        //this.removeListItem = this.removeListItem.bind(this);
    }

    addTweetToList(newTweet) {
        let currentList = this.state.TweetsList;
        currentList.push(newTweet);
        this.setState({TweetsList: currentList});
    }

    // removeListItem(itemToRemove) {
    //     let currentList = this.state.TweetsList;
    //     currentList.splice(itemToRemove, 1);
    //     this.setState({TweetsList: currentList});
    // }

    state = {
        username: '',
        tweet: '',
        disable_tweet: false

    };
    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prestate => {
            const newState = {...prestate};
            newState[name] = value;
            document.getElementById("text_size").innerHTML = newState.tweet.length.toString();
            if (newState.tweet.length < 1 || newState.tweet.length > 10) {
                document.getElementById("tweet_size_warn").innerHTML = "<p class='warn' id='size_warn'>tweet must have 1 to 250 letters</p>";
                this.state.disable_tweet = true;
            } else {
                this.state.disable_tweet = false;
            }
            console.log("tweet : " + value);
            return newState;
        });
    };

    render() {
        return (
            <div className="App">
                <h2 id="home">Home</h2>
                <div id="sidebar_home">
                    <ul>
                        <Link to="/home">
                            <li className="sidebar">Home</li>
                        </Link>
                        <Link to="/notifications">
                            <li className="sidebar">Notifications</li>
                        </Link>
                        <Link to="/profile">
                            <li className="sidebar">Profile</li>
                        </Link>
                    </ul>
                    <button id="tweet_button">Tweet</button>
                </div>

                <div id="page_center">
                    <div>
                        <TweetsList eachTweet={this.state.TweetsList}/>
                        <TweetBox addTweet={this.addTweetToList}/>
                    </div>
                </div>
                <div id="sidebar_search">
                    <div class="search">
                        <input id="search_txt" type="text" size="10" placeholder="Search Twitter"
                               onClick={e => this.sendTweet(e, this.state)} name="search"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
