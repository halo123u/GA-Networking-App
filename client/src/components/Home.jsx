import React, { Component } from 'react';

import Login from './Login';
import Register from './Register';

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
