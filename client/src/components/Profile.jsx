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
        console.log('Fetching profile')
        if(this.props.data !== undefined){
            console.log(this.props.data.id)
            axios.get(`/profile/${this.props.data.id}`)
            .then((res) => {
                console.log(res.data[0])
                this.setState ({
                    profileInfo: res.data[0]
                })
            }).catch(err => console.log(err))
            console.log(this.props.data)
        } else {
            console.log('Profile not loaded')
        }
    }

    renderProfile(){
        if(this.state.profileInfo) {
         return(
          <div className="profile-info">
            <li><p><img src={this.state.profileInfo.picture_url} /></p> </li>
            <li><p>{this.state.profileInfo.bio} </p></li>
            <li><p>{this.state.profileInfo.age} </p></li>
            <li><p>{this.state.profileInfo.class}</p></li>
            <li><p>{this.state.profileInfo.cohort} </p></li>
            <li><p>{this.state.profileInfo.interest} </p></li>
            <li><p>{this.state.profileInfo.location} </p></li>
          </div>
         )
        } else {
            return <p> className="loading">Loading...</p>
        }
    }
    
    render(){
        return(
            <div className="Profile">
                <h1>Profile</h1>
            <ul>
            <li> {this.renderProfile()} </li> 
            </ul>
            </div>
        )
    }
}

export default Profile;
