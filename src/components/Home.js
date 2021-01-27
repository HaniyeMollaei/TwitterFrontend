import React from 'react';
import '../css/home.css';
import {Link} from "react-router-dom";
import logo from "../src/logo.png";
import retweet from "../src/retweet.png";

class TweetsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }

    sendTweet(e) {
        //  e.preventDefault();
        let newTweet = this.refs.item.value;
        if (newTweet !== '') {
            this.props.addTweet(newTweet);
            this.refs.item.value = '';
        }
    }

    render() {
        let buttonText = this.state.liked ? 'Unlike' : 'Like';
        return (
            <ul id="tweets_list">
                {Object.keys(this.props.eachTweet).map((index) => {
                    return (
                        <li id="each_tweet" name={index}>{this.props.eachTweet[index]}
                            <div className="customContainer">
                                <button onClick={this.handleClick} className="like">
                                    <i className="fa fa-heart"></i>&nbsp;
                                    {buttonText}</button>
                                <input id="comment" placeholder="comment"/>
                                <form onSubmit={e => this.sendTweet(e)}>
                                    <img id="retweet" src={retweet} onClick={e =>
                                        this.sendTweet(this.props.eachTweet[index], this.state)}
                                    /></form>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )
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
                <input class="form-control" onChange={this.handle_change} id="tweet_txt" name="tweet" rows="8" cols="70"
                       placeholder="what's happening?" type="text" ref="item"/><br/>
                <p id="text_size"></p>
                <div id="tweet_size_warn"></div>
                <button id="send_tweet_button" type="submit" class="btn btn-primary"
                        onClick={e => this.sendTweet(e, this.state)}>Tweet
                </button>
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
                                <div>
                                    <TweetsList eachTweet={this.state.TweetsList}/>
                                    <TweetBox addTweet={this.addTweetToList}/>
                                </div>
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

export default Home;
