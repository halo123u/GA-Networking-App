import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            userData: false
        }
    }
    
    render(){
        return(
            <div className="appHome mdl-card mdl-shadow--8dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">LinkGA</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Start making connections today!
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/login'>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Login</button>
                    </Link>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/register'>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;
