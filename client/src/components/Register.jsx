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
            <div className= "register">
                {redirect ?(<Redirect to='/profile'/>) : null}
                <form onSubmit={(e) => this.props.submit(e, this.state.username, this.state.password, this.state.email, this.state.firstName, this.state.lastName)}>
                 <div class="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" id="name" type="First Name" required="true" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="name">First Name...</label>
                  <input className="mdl-textfield__input" id="last" type="Last Name" required="true" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="last">Last Name...</label>
                  <input className="mdl-textfield__input" id="email" type="email" required="true" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="email">Email...</label>
                  <input className="mdl-textfield__input" id="user-reg" type="text" required="true" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="user-reg">Username..</label>
                  <input className="mdl-textfield__input" id="password-reg" type="password" required="true" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                  <label className="mdl-textfield__label" for="password-reg">Password...</label>
                  <input className="submit" id="submit" type="submit" value="Submit!" onClick={this.handleSubmit} />
                  {/* <label className="mdl-textfield__label" for="submit">Submit...</label> */}
                  <div className="title">
                     <h1>Register</h1>
                  </div>
                </div>
                </form>
                </div>

             
  


        
        )
    }
}

export default Register;
