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
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">GA Networking App</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Get Started
                    </a>
                </div>
                <div class="mdl-card__menu">
                    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i class="material-icons">share</i>
                    </button>
                </div>
            </div>
            <div className="appHome">
                <h1>
                    GA Tinder
                </h1>
                <main>
                    <div className="authInfo">
                        <ul>
                            <li><button type="button"><Link to='/login'>Login</Link></button></li>
                            <li><button type="button"><Link to='/register'>Register</Link></button></li>
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home;
