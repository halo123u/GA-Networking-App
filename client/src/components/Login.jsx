import React, { Component } from 'react';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState ({
          [name]: value
        });
        console.log(this.state.username)
      } 

    render(){

        return(
            <div className="login-page">
                <form onSubmit={(e) => this.props.submit(e, this.state.username, this.state.password)}>
                  <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" id="username" type="text" required="true" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
              <label className="mdl-textfield__label" for="username">Username...</label>
              <input className="mdl-textfield__input" id="password" type="password" required="true" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
              <label className="mdl-textfield__label" for="password">Password...</label>
              <input className="mdl-textfield__input" id="login" type="submit" value='Log In!' onClick={this.handleSubmit} />
              <label className="mdl-textfield__label" for="login">Log In!...</label>
            </div>
            </form>
          </div>
        
        )
    }
}

export default Login;
