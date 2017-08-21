import React, { Component } from 'react';
import * as firebase from "firebase";
import firebaseui from 'firebaseui';
// import User from './components/User';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      userData: null,
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
    this.rootRef = firebase.database().ref();
    this.userData = this.rootRef.child('accountInfo');

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

      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      // User is signed in.
        console.log(user.toJSON())
        var userInfo = user.toJSON();
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        this.rootRef = firebase.database().ref();
        this.userData = this.rootRef.child('accountInfo');
        document.querySelector("#sign-in").innerHTML = (`Welcome Back ${displayName}`)
        grabUser(userInfo)
        this.userData.child(uid).set(userInfo)
        localStorage.setItem('uid', uid)
      } else {
      // User is signed out.
        console.log('signed out')
        }
      });

      function grabUser(userInfo){
        console.log(userInfo)
        // this.userData.push().setValue(userInfo)
      }

  }
    componentDidMount() {
      // firebase.auth().currentUser.toJSON()
      this.userData.on('child_added', snapshot=>{
        console.log(snapshot.val())
        if(localStorage.getItem('uid') === snapshot.val().uid){
          console.log(snapshot.val().displayName)
          let userDataSnap = snapshot.val()
          this.setState({
            userData: userDataSnap,
            loggedIn: true
          })
        }else {
          null
        }
      })
    }

  userAuth=(user)=>{
    console.log(user)
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
          <div className="authStatus" >
              <div id="sign-in-status"></div>
              <div id="sign-in"></div>
              <div id="account-details"></div>
          </div>
          <Route exact path='' component={this.App} />
        </div>
      {/* </Switch> */}
    </Router>
    );
  }
}

export default App;

// export function logout () {
//   return firebaseAuth().signOut()
// }