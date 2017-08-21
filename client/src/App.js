import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} /> */}
            <Route exact path="/Profile" component={Profile} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;