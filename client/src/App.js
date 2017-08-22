import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import DMList from './components/DMList';
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import ProfileEdit from './components/ProfileEdit';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import './App.css';

class App extends Component {
      constructor() {
        super()
        this.state = {
          auth: false,
          user: null,
          currentPage: '/',
          profileFormInfo: null
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.logOut = this.logOut.bind(this);
     }


handleLoginSubmit = (e, username, password) => {
  e.preventDefault();
  console.log("hi");
  axios.post('/auth/login', {
    username,
    password
  }).then(res => {
    this.setState ({
    auth: res.data.auth,
    user: res.data.user,
    currentPage: 'profile'
    })
  }).catch(err => console.log(err));
}  

handleRegisterSubmit = (e, username, password, email, firstName, lastName) => {
  e.preventDefault();
  console.log(username);
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
      currentPage: '/profileForm'
    })
  }).catch(err => console.log(err))
}

handleProfileFormSubmit = (e, age, class_name, cohort, interest, location, bio, pic, user_id) => {
  e.preventDefault();
  axios.post('/profile',{
    age, class_name, cohort, interest, location, bio, pic, user_id
  }).then(res=>{
    console.log(res)
  }).catch(err=>console.log(err))
}

logOut = () => {
  axios.get('/auth/logout')
  .then(res => {
    console.log(res)
    this.setState ({
      auth: false
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
            <Route exact path="/login" render={() => <Login submit={this.handleLoginSubmit} />} />
            <Route exact path="/register" render={() => <Register submit={this.handleRegisterSubmit} />} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/edit" render={() => <ProfileEdit data={this.state.user} submit={this.handleProfileFormSubmit}/>} />
            <Route exact path="/profileForm" render={() => <ProfileForm data={this.state.user} submit={this.handleProfileFormSubmit}/>}/>
            <Route exact path="/inbox" render={() => <DMList data={this.state.user} />} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;