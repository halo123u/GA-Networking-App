import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profileInfo: null

        }
    }
    componentDidMount() {
        if(this.props.data !== undefined){
            console.log(this.props.data)
            this.setState ({
                profileInfo: this.props.data
            })
        } else {
            console.log('Profile not loaded')
        }
    }
    
    render(){
        return(
            <div className="Profile">
                <h1>Profile</h1>
            <ul>
              <li><p>{this.state.profileInfo.picture_url}</p></li>
              <li><p>{this.state.profileInfo.bio}</p></li>
              <li><p>{this.state.profileInfo.age} </p></li> 
              <li><p>{this.state.profileInfo.class_name}</p></li> 
              <li><p>{this.state.profileInfo.cohort}</p></li>
              <li><p>{this.state.profileInfo.interest}</p></li>
              <li><p>{this.state.profileInfo.location}</p></li>
            </ul> 
            </div>
        )
    }
}

export default Profile;
