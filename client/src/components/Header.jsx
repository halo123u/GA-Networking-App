import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li onClick={props.logOut}><a href="#">Log Out</a></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/feed'>Discover</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/profileForm'>Profile Form</Link></li>
                <li><Link to='/profile/edit'> Edit</Link></li>
                <li><Link to='/inbox'>DMs</Link></li>
            </nav>
        </header>
    )
}

export default Header;