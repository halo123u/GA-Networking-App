import React, { Component } from 'react';

import Profile from './components/Profile';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;