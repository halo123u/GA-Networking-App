import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    console.log(props);
    let styles = {
        hideNavItem: {
            display: 'none',
        },
        showNavItem: {
            display: 'block',
        }
    }
    
    return(
        <header>
            <nav>
                <li style={props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/'>Home</Link></li>
                <li style={props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/login'>Login</Link></li>
                <li style={!props.authState ? styles.hideNavItem : styles.showNavItem} onClick={props.logOut}><a href="#">Log Out</a></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/feed'>Feed</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/profileForm'>Profile Form</Link></li>
                <li><Link to='/profile/edit'> Edit</Link></li>
                <li><Link to='/inbox'>DMs</Link></li>
            </nav>
        </header>
    )
}

export default Header;