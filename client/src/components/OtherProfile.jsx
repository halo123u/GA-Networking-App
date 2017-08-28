import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';

class OtherProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            userInfo: null,
            otherUserInfo: null,
            dataLoaded: false

        }
    }

    componentDidMount() {
        this.setState({userInfo: this.props.data})
        if (this.props.data !== null) {
            this.setState({redirect: false})
            axios.get('/profile/feed').then(res => {
                let filteredProfile = res.data.filter(profile=>{
                    if(profile.user_id === this.props.profileToView ){
                        return profile
                    }
                })
                this.setState({
                    otherUserInfo: filteredProfile[0],
                    dataLoaded: true
                })
            }).catch(err=> {console.log(err)});
        }else{
            this.setState({redirect: true})
        }
    }

    renderProfile = () => {
        if(this.state.otherUserInfo) {
            let otherUserInfo = this.state.otherUserInfo;
         return(
            <div className="profile-card-square mdl-card mdl-shadow--8dp">
                <div className="mdl-card__title mdl-card--expand" style={{background: `url(${this.state.otherUserInfo.picture_url}) center / cover no-repeat`}}>
                    <h2 className="mdl-card__title-text profileName">
                        {otherUserInfo.first_name} &nbsp;{otherUserInfo.last_name}
                    </h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <h4>About Me </h4>
                    {otherUserInfo.bio}
                    <ul>
                        <li> <p>Age: {otherUserInfo.age}</p> </li>
                        <li> <p>Location: {otherUserInfo.location}</p> </li>
                        <li> <p>Class: {otherUserInfo.class}</p> </li>
                        <li> <p>Cohort: {otherUserInfo.cohort}</p> </li>
                        <li> <p>Interest's: {otherUserInfo.interest}</p> </li>
                    </ul>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/feed'>Go Back</Link>
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
                {redirect ?(<Redirect to='/login'/>) : null}
                <h1 className="pageTitle"> Profile <i className="material-icons">perm_identity</i> </h1>
            <ul>
                <li> {this.renderProfile()} </li> 
            </ul>
            </div>
        )
    }
}

export default OtherProfile;