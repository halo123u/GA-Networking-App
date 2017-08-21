import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                  <li onClick={props.logOut}>Log Out</li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/feed'>Discover</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/messages'>DMs</Link></li>
            </nav>
        </header>
    )
}

export default Header;