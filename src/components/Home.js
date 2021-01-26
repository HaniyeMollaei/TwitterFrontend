import React from 'react';
import '../css/home.css';
import {Link} from "react-router-dom";

import ReactDOM from "react-dom";
import {TextField} from "@material-ui/core";

class Home extends React.Component {
    data = [{"name": "test1"}, {"name": "test2"}];

    // eslint-disable-next-line no-undef
    //  listItems = data.map((d) => <li className="tweets" key={d.name}>{d.name}</li>);
//     for (let i = 0; i < data.length; i++) {
//     listItems.push(
// <li className="tweets" key={data.map.name}>{data.map.name}</li>
// );
//     getInitialState() {
//         return {email: ''}
//     }
//     handleChange(e) {
//         this.setState({tweet: "e.target.value"})
//     }

    render() {
        // const CHARACTER_LIMIT = 20;
        // const [values, setValues] = ({
        //     name: "Hello"
        // });
        //
        // const handleChange = name => event => {
        //     setValues({ ...values, [name]: event.target.value });
        // };
        return (
            <div className="App">
                <ul>
                    <Link to="/home">
                        <li className="sidebar">Home</li>
                    </Link>
                    <Link to="/notifications">
                        <li className="sidebar">Notifications</li>
                    </Link>
                    <Link to="/Profile">
                        <li className="sidebar">Profile</li>
                    </Link>
                </ul>
                <button id="tweet_button">Tweet</button>
                <h2 id="home">Home</h2>
                <div>
                    <TextField size="80" height="1000" className="tweet"
                               label="what's happening?"
                               inputProps={{
                                   maxlength: 250

                               }}

                        //    value={values.name}
                        //  helperText={`${values.name.length}/${20}`}
                        //  onChange={handleChange("name")}
                               margin="normal"
                               variant="outlined"
                               // value="yes"
                               // onChange={this.handleChange}
                    />
                    <button disabled={!this.valueOf()} id="send_tweet_button">Tweet</button>
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
