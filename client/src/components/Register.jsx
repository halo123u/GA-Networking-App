import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            redirect: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentWillMount() {
        console.log('Checking Logged in Status')
        if(this.props.authState){
            console.log('logged in already')
            this.setState({redirect: true})
        }else{
            console.log('not logged in')
            this.setState({redirect: false})
        }
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {redirect} = this.state;
        return(
            <div className="register-page mdl-card mdl-shadow--8dp">
                {redirect ?(<Redirect to='/profile'/>) : null}
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Register</h2>
                </div>
                <form onSubmit={(e) => this.props.submit(e, this.state.username, this.state.password, this.state.email, this.state.firstName, this.state.lastName)}>
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
        )
    }
}

export default Register;
