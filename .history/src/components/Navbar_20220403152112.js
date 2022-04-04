import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <a className="nav-link" ><h6>{user.name}</h6></a>
                <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
                    {/* <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} /> */}
                    Logout
                </a>
            </ul>
        )
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Sign In</Link>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container-lg mt-5'>
                    <h5 className='bar text-black'>
                        <Link className="navbar-brand" to="/"><i class='fas fa-users'></i> cvmate login</Link>
                    </h5>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));