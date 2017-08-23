import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProfileForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: null,
            age: '',
            class_name: '',
            cohort: '',
            interest: '',
            location: '',
            bio: '',
            picture_url: '',
            user_id: null,
            redirect: false
        }
    }
    componentDidMount() {
        if(this.props.data !== null){
            console.log(this.props.data)
            this.setState({
                redirect: false,
                userInfo: this.props.data,
                user_id: this.props.data.id
            })
        }else{
            console.log('Profile not loaded')
            this.setState({redirect: true})
        }
    }
    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    
    render(){
        const {redirect} = this.state;
        return(
            <div className="profileForm">
                <h1>Profile Form</h1>
                {redirect ?(<Redirect to='/profile'/>) : null}
                <form onSubmit={(e) => this.props.submit(e, this.state.age, this.state.class_name, this.state.cohort, this.state.interest, this.state.location, this.state.bio, this.state.picture_url, this.state.user_id)}>
                  <input type="number" required="true" name="age" placeholder="age" value={this.state.age} onChange={this.handleInputChange} />
                  <input type="type" required="true" name="class_name" placeholder="class name" value={this.state.class_name} onChange={this.handleInputChange} />
                  <input type="type" required="true" name="cohort" placeholder="cohort" value={this.state.cohort} onChange={this.handleInputChange} />
                  <input type="type" required="true" name="interest" placeholder="interest" value={this.state.interest} onChange={this.handleInputChange} />
                  <input type="type" required="true" name="location" placeholder="location" value={this.state.location} onChange={this.handleInputChange} />
                  <input type="type" required="true" name="bio" placeholder="bio" value={this.state.bio} onChange={this.handleInputChange} />
                  <input type="type" required="true" name="picture_url" placeholder="picture_url" value={this.state.picture_url} onChange={this.handleInputChange} />
                  <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default ProfileForm;
