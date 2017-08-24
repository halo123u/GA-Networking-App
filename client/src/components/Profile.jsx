import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profileInfo: null,
            redirect: false
        }
    }
    componentWillMount() {
        console.log('Checking Logged in Status')
        if(this.props.authState){
            console.log('logged in already')
        }else{
            console.log('not logged in')
        }
    }

    componentDidMount() {
        console.log('Fetching profile')
        if(this.props.data !== null){
            console.log(this.props.data.id)
            axios.get(`/profile/${this.props.data.id}`)
            .then((res) => {
                console.log(res.data[0])
                this.setState ({
                    profileInfo: res.data[0],
                    redirect: false
                })
            }).catch(err => console.log(err))
            console.log(this.props.data)
        } else {
            console.log('Profile not loaded')
            this.setState({
                redirect: true
            })
        }
    }

    renderProfile(){
        if(this.state.profileInfo) {
         return(
            //  <div className="appHome mdl-card mdl-shadow--8dp">
            //     <div className="mdl-card__title">
            //         <h2 className="mdl-card__title-text">GA Networking App</h2>
            //     </div>
            //     <div className="mdl-card__supporting-text">
            //         Start making connections today!
            //     </div>
            //     <div className="mdl-card__actions mdl-card--border">
            //         <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/login'>
            //             <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Login</button>
            //         </Link>
            //     </div>
            //     <div className="mdl-card__actions mdl-card--border">
            //         <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/register'>
            //             <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Register</button>
            //         </Link>
            //     </div>
            // </div>
            <div className="demo-card-square mdl-card mdl-shadow--8dp">
                <div className="mdl-card__title mdl-card--expand" style={{background: `url(${this.state.profileInfo.picture_url}) center / contain`}}>
                    <h2 className="mdl-card__title-text">
                        {this.props.data.first_name} {this.props.data.last_name
                }</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    View Updates
                    </a>
                </div>
            </div>
            // <div className="profile-info">
            //     <li><p><img src={this.state.profileInfo.picture_url} /></p> </li>
            //     <li>Bio: <p>{this.state.profileInfo.bio} </p></li>
            //     <li>Age: <p>{this.state.profileInfo.age} </p></li>
            //     <li>Class: <p>{this.state.profileInfo.class}</p></li>
            //     <li>Cohort: <p>{this.state.profileInfo.cohort} </p></li>
            //     <li>Interest: <p>{this.state.profileInfo.interest} </p></li>
            //     <li>Location: <p>{this.state.profileInfo.location} </p></li>
            // </div>
         )
        } else {
            return <p> className="loading">Loading...</p>
        }
    }
    
    render(){
        const {redirect} = this.state;
        return(
            <div className="Profile">
                {redirect ?(<Redirect to='/login'/>) : null}
                <h1>Profile</h1>
            <ul>
            <li> {this.renderProfile()} </li> 
            </ul>
            </div>
        )
    }
}

export default Profile;
