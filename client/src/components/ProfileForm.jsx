import React, { Component } from 'react';

class ProfileForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: null,
            age: '',
            class: '',
            cohort: '',
            interest: '',
            location: '',
            bio: '',
            picture_url: ''
        }
    }
    componentDidMount() {
        if(this.props.user !== null){
            console.log(this.props.user)
            this.setState({
                userInfo: this.props.user
            })
        }else{
            console.log('Profile not loaded')
        }
    }
    handleInputChange = (e) => {
        
    }
    handleSubmit = (e) => {
        e, this.state.username, this.state.password, this.state.email, this.state.firstName, this.state.lastName)
    }
    render(){
        return(
            <div className="profileForm">
                <h1>Profile Form</h1>
                {/*age,class,cohort,interest,location,bio,picture_url, user_id  */}
                <form onSubmit={(e) => this.props.submit(}>
                  <input type="text" required="true" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
                  <input type="password" required="true" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                  <input type="email" required="true" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
                  <input type="First Name" required="true" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
                  <input type="Last Name" required="true" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} />
                  <input type="submit" value="Register" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default ProfileForm;
