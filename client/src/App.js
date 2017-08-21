import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import Message from './components/Message';
import Profile from './components/Profile';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
      constructor() {
        super()
        this.state = {
          auth: false,
          user: null
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.logOut = this.logOut.bind(this);
     }

handleLoginSubmit = (e, username, password) => {
  e.preventDefault();
  axios.post('/auth/login', {
    username,
    password
  }).then(res => {
    this.setState ({
    auth: res.data.auth,
    user: res.data.user,
    currentPage: 'home'
    })
  }).catch(err => console.log(err))
}  

handleRegisterSubmit = (e, username, password, email, firstName, lastName) => {
  e.preventDefault();
  axios.post('/auth/register', {
    username,
    password,
    email,
    firstName,
    lastName
  }).then(res => {
    this.setState ({
      auth: res.data.auth,
      user: res.data.user,
      currentPage: 'home'
    })
  }).catch(err => console.log(err))
}

logOut = () => {
  axios.get('/auth/logout')
  .then(res => {
    console.log(res)
    this.setState ({
      auth: false,
      currentPage: 'home'
    })
  }).catch(err => console.log(err))
}

  render() {
    return (
      <Router>
        <div className="App">
          <Header logOut={this.props.logout} />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/messages" component={Message} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;