import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: false
    }
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA0g-O4WloNZxjgvJ0ASrck3xq1DuYtV7s",
      authDomain: "ga-tinder.firebaseapp.com",
      databaseURL: "https://ga-tinder.firebaseio.com",
      projectId: "ga-tinder",
      storageBucket: "ga-tinder.appspot.com",
      messagingSenderId: "511990920076"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
