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
            <div className="appHome">
                <h1>
                    GA Tinder
                </h1>
            </div>
        )
    }
}

export default Home;