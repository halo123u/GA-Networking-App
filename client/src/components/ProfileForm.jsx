import React, { Component } from 'react';

class ProfileForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            profileInfo: null
        }
    }
    componentDidMount() {
        // axios.get(`profile/${}`)
    }
    render(){
        return(
            <div className="Profile">
                <h1>Profile Form</h1>
            </div>
        )
    }
}

export default ProfileForm;
