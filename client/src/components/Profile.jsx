import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profileInfo: null,
            redirect: false
        }
    }

    componentDidMount() {
        if(this.props.data !== null){
            axios.get(`/profile/${this.props.data.id}`)
            .then((res) => {
                this.setState ({
                    profileInfo: res.data[0],
                    redirect: false
                })
            }).catch(err => console.log(err))
        } else {
            this.setState({
                redirect: true
            })
        }
    }

    renderProfile(){
        if(this.state.profileInfo) {
         return(
            <div className="profile-card-square mdl-card mdl-shadow--8dp">
                <div className="mdl-card__title mdl-card--expand" style={{background: `url(${this.state.profileInfo.picture_url}) center / cover no-repeat`}}>
                    <h2 className="mdl-card__title-text profileName">
                        {this.props.data.first_name} &nbsp;{this.props.data.last_name}
                    </h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <h4>About Me </h4>
                    {this.state.profileInfo.bio}
                    <ul>
                        <li> <p>Age: {this.state.profileInfo.age}</p> </li>
                        <li> <p>Location: {this.state.profileInfo.location}</p> </li>
                        <li> <p>Class: {this.state.profileInfo.class}</p> </li>
                        <li> <p>Cohort: {this.state.profileInfo.cohort}</p> </li>
                        <li> <p>Interest's: {this.state.profileInfo.interest}</p> </li>
                    </ul>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/profile/edit'>Edit Profile</Link>
                </div>
            </div>
         )
        } else {
            return <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        }
    }
    
    render(){
        const {redirect} = this.state;
        return(
           <div className="Profile">
                {redirect   ?(<Redirect to='/login'/>) : null}
                <h1 className="pageTitle"> Profile <i className="material-icons">perm_identity</i> </h1>
            <ul>
                <li> {this.renderProfile()} </li> 
            </ul>
            </div>
        )
    }
}


export default Profile;
