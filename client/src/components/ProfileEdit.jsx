import React, { Component } from 'react';
import axios from 'axios';

class ProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            formData: null,
            age: '',
            class_name: '',
            cohort: '',
            interest: '',
            locations: '',
            bio: '',
            piture_url: '',
            user_id: null,
        }
    }

    componentDidMount() {
        if(this.props.data !== null){
            console.log(this.props.data)
            this.setState({
                userInfo: this.props.data,
                user_id: this.props.data.id
            })
        axios.get(`/profile/:${this.state.user_id}`)
        .then((res) => {
            console.log(res)
        }).catch(err => console.log(err));
        }else{
            console.log('Profile not loaded')
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
        return(
            <div className="edit-form">
                <h1>Edit Form</h1>
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



export default ProfileEdit;