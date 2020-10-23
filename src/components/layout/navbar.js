import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/haud-shield.png'

export default () => {
    return(
        <nav className="nav">
            <div className="container">
                <div className="d-flex justify-space-between align-items-center">
                    <Link to="/" className="d-flex align-items-center main-logo"><img className="nav-logo" src={Logo} alt=""/>
                        <h1 className="main-logo-title color-primary">HAUD</h1>
                    </Link>
                    <NavLink className="btn caption" to="/create-user">Add User</NavLink>
                </div>
            </div>
        </nav>
    )
}