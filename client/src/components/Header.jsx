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
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                    {/* <!-- Title --> */}
                    <span className="mdl-layout-title">GA Networking</span>
                    {/* <!-- Add spacer, to align navigation to the right --> */}
                    <div className="mdl-layout-spacer"></div>
                    {/* <!-- Navigation. We hide it in small screens. --> */}
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Title</span>
                    <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    <div className="page-content"></div>
                </main>
            </div>
                <li style={props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/'>Home</Link></li>
                <li style={props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/login'>Login</Link></li>
                <li style={!props.authState ? styles.hideNavItem : styles.showNavItem} onClick={props.logOut}><a href="#">Log Out</a></li>
                <li style={props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/register'>Register</Link></li>
                <li style={!props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/feed'>Feed</Link></li>
                <li style={!props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/profile'>Profile</Link></li>
                <li style={props.authState ? styles.hideNavItem : styles.hideNavItem}><Link to='/profileForm'>Profile Form</Link></li>
                <li style={!props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/profile/edit'> Edit</Link></li>
                <li style={!props.authState ? styles.hideNavItem : styles.showNavItem}><Link to='/inbox'>DMs</Link></li>
        </header>
    )
}

export default Header;