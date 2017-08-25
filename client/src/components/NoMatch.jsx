import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NoMatch extends Component{

    render(){
        return(
            <div> 
                <h1 className="pageTitle"> 404 Not Found </h1>
                <h2><Link to='/profile'>Go Back</Link></h2>
            </div>
        )
    }
}

export default NoMatch;