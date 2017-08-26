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
            <div className="edit-form mdl-card mdl-shadow--8dp">
                {redirect ?(<Redirect to='/login'/>) : null}
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Edit Profile  <i className="material-icons">edit</i> </h2>
                </div>
                <form onSubmit={(e) => this.props.submit(e, this.state.age, this.state.class_name, this.state.cohort, this.state.interest, this.state.location, this.state.bio, this.state.picture_url, this.state.user_id)}>
                    <div className="mdl-card__supporting-text">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="url" type="text" required="true" name="picture_url" value={this.state.picture_url} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="url"> <i className="material-icons">add_a_photo</i>   </label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="age" type="number" required="true" name="age" value={this.state.age} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="age">Age...</label>
                        </div>
                        <div className="class-filter edit-profile">
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="class-name">
                                <input onClick={this.handleInputChange} type="radio" id="class-name" className="mdl-radio__button" name="class_name" value="WDI" />
                                <span className="mdl-radio__label">WDI</span>
                            </label>
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="class-name">
                                <input onClick={this.handleInputChange} type="radio" id="class-name" className="mdl-radio__button" name="class_name" value="UXDI" />
                                <span className="mdl-radio__label">UXDI</span>
                            </label>
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="class-name">
                                <input onClick={this.handleInputChange} type="radio" id="class-name" className="mdl-radio__button" name="class_name" value="DSI" />
                                <span className="mdl-radio__label">DSI</span>
                            </label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="cohort" type="text" required="true" name="cohort" value={this.state.cohort} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="cohort">Cohort..</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="interest" type="password" required="true" name="interest" value={this.state.interest} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="interest">Interest...</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="location" type="password" required="true" name="location" value={this.state.location} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="location"> <i className="material-icons"> add_location</i> Location </label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="bio" type="password" required="true" name="bio" value={this.state.bio} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="bio">Bio...</label>
                        </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" type="submit" value='Submit' onClick={this.handleSubmit} />
                    </div>
                </form>
            </div>
        )
    }
}  

export default ProfileEdit;