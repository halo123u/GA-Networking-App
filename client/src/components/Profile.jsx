import React, { Component } from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            profileInfo: null
        }
        console.log(this.props)
        console.log(this.props.data)
        console.log(props.data)
    }
    componentDidMount() {
        this.setState({
            profileInfo: this.props.data
        })
    }
    render(){
        console.log(this.props.data)
        return(
            <div className="Profile">
                
            </div>
        )
    }
}

export default Profile;