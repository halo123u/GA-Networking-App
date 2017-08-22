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
        console.log(this.state.name)
      } 

    render(){
        return(
            <div className="login">
              <form onSubmit={(e) => this.props.submit(e, this.state.username, this.state.password)}>
              <input type="text" required="true" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
              <input type="password" required="true" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
              <input type="submit" value='Log in!' onClick={this.handleSubmit} />
            </form>
          </div>
        )
    }
}

export default Login;
