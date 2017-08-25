import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
        console.log('edit profile mounted')
        if(this.props.data !== null){
            console.log(this.props.data)
            this.setState({
                userInfo: this.props.data,
                user_id: this.props.data.id,
                redirect: false
            })
        axios.get(`/profile/${this.props.data.id}`)
        .then((res) => {
            console.log(res.data[0])
            let info = res.data[0]
            this.setState({
                formData: info,
            })
        }).catch(err => console.log(err));
        }else{
            console.log('Profile not loaded')
            this.setState({
                redirect: true
            })
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
        const {redirect} = this.state
        return(
            <div className="register-page mdl-card mdl-shadow--8dp">
                {redirect ?(<Redirect to='/profile'/>) : null}
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Edit Profile</h2>
                </div>
                <form onSubmit={(e) => this.props.submit(e, this.state.age, this.state.class_name, this.state.cohort, this.state.interest, this.state.location, this.state.bio, this.state.picture_url, this.state.user_id)}>
                    <div className="mdl-card__supporting-text">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="name" type="text" required="true" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="name">First Name...</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="last" type="text" required="true" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="last">Last Name...</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="email" type="email" required="true" name="email" value={this.state.email} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="email">Email...</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="user-reg" type="text" required="true" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="user-reg">Username..</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="password-reg" type="password" required="true" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="password-reg">Password...</label>
                        </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" type="submit" value='Register' onClick={this.handleSubmit} />
                    </div>
                </form>
            </div>
            <div className="edit-form">
                {redirect ?(<Redirect to='/login'/>) : null}
                <h1>Edit Form</h1>
                
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" id="url" type="type" placeholder="Picture Url" required="true" name="picture_url" value={this.state.picture_url} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="url"></label>
                  <input className="mdl-textfield__input"  id="age" type="number" placeholder="Age" required="true" name="age" value={this.state.age} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="age"></label>
                  <input className="mdl-textfield__input" rows= "1" id="class-name" type="type" placeholder="Class name" required="true" name="class_name" value={this.state.class_name} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="class-name"></label>
                  <input className="mdl-textfield__input" rows= "1" id="cohort" type="type" placeholder="Cohort" required="true" name="cohort" value={this.state.cohort} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="cohort"></label>
                  <input className="mdl-textfield__input" rows= "1" id="interest" type="type" placeholder="Interest" required="true" name="interest" value={this.state.interest} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="interest"></label>
                  <input className="mdl-textfield__input" rows= "1" id="location" type="type" placeholder="Location" required="true" name="location" value={this.state.location} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="location"></label>
                  <input className="mdl-textfield__input" rows= "1" id="bio" type="type" placeholder="Bio..." required="true" name="bio" value={this.state.bio} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="bio"></label>
                  {/* <input className="enter" type="submit" value="Submit" onClick={this.handleSubmit} /> */}

                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="enter" type="submit" value="Submit" onClick={this.handleSubmit} >
                      Submit
                 </button>
                  
                </div>
                </form>
            </div>
        )
    }
}  

export default ProfileEdit;