import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import User from './components/User';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
    var uiConfig = {
        signInSuccessUrl: '/user',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          // firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          // firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: null
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

  }


  render() {
    
    return (
    <Router>
      {/* <Switch> */}
        <div className="App">
          <div className="App-header">
            <h1>Welcome to My Awesome App</h1>
          </div>
          <div id="firebaseui-auth-container"></div>
          <div className="authStatus">
              <div id="sign-in-status"></div>
              <div id="sign-in"></div>
              <div id="account-details"></div>
          </div>
          <Route exact path='' component={this.App} />
          <Route exact path='/user' component={User} />
        </div>
      {/* </Switch> */}
    </Router>
    );
  }
}

export default App;
