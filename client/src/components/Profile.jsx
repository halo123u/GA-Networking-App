import React, { Component } from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profileInfo: null
        }
    }
    componentDidMount() {
        
    }
    render(){
        return(
            <div className="Profile">
                <h1>Profile</h1>
            </div>
        )
    }
}

export default Profile;
