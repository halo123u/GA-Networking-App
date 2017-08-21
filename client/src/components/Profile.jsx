import React, { Component } from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profileInfo: null
        }
        console.log(this.props.state)
    }
    componentDidMount() {
        // console.log(this.props.location.state.data)
        // let profile = this.props.location.state.data
        // this.setState({
        //     profileInfo: profile
        // })
    }
    render(){
        // let profile = this.props.location.state.data;
        return(
            <div className="Profile">
                {/* <h1 className="userName">{profile.displayName}</h1>
                <img src={profile.photoURL} alt="profile Image"/> */}
            </div>
        )
    }
}

export default Profile;