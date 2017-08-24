import React from 'react';
import Footer from './Footer';
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
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">GA Networking</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.showNavItem} to='/'>Home</Link>
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.showNavItem} to='/login'>Login</Link>
                        <Link className="mdl-navigation__link"  style={!props.authState ? styles.hideNavItem : styles.showNavItem} onClick={props.logOut} to='#'>Log Out</Link>
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.showNavItem} to='/register'>Register</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/feed'>Feed</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/profile'>Profile</Link>
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.hideNavItem} to='/profileForm'>Profile Bio</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/profile/edit'>Edit Profile</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/inbox'>DMs</Link>
                    </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">GA Networking</span>
                    <nav className="mdl-navigation">
                     <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.showNavItem} to='/'>Home</Link>
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.showNavItem} to='/login'>Login</Link>
                        <Link className="mdl-navigation__link"  style={!props.authState ? styles.hideNavItem : styles.showNavItem} onClick={props.logOut} to='#'>Log Out</Link>
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.showNavItem} to='/register'>Register</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/feed'>Feed</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/profile'>Profile</Link>
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.hideNavItem} to='/profileForm'>Profile Bio</Link>
                        <Link className="mdl-navigation__link" style={props.authState ? styles.hideNavItem : styles.hideNavItem} to='/events'>Events</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/profile/edit'>Edit Profile</Link>
                        <Link className="mdl-navigation__link" style={!props.authState ? styles.hideNavItem : styles.showNavItem} to='/inbox'>DMs</Link>
                    </nav>
                    <Footer />
                </div>
            </div>
        </header>
    )
}

export default Header;