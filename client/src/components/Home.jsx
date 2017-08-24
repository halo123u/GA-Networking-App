import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            userData: false
        }
    }
    
    render(){
        return(
            <div className="appHome mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">GA Networking App</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Start making connections today!
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/login'>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Login</button>
                    </Link>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to='/register'>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Register</button>
                    </Link>
                </div>
            </div>
            // <div className="appHome">
            //     <h1>
            //         GA Tinder
            //     </h1>
            //     <main>
            //         <div className="authInfo">
            //             <ul>
            //                 <li><button type="button"><Link to='/login'>Login</Link></button></li>
            //                 <li><button type="button"><</button></li>
            //             </ul>
            //         </div>
            //     </main>
            // </div>
        )
    }
}

export default Home;
