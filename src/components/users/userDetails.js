import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect, reduxFirebase } from 'react-redux-firebase'
import { compose } from 'redux';

class UserDetails extends Component {
    render(){
        const { user } = this.props
        if (user) {
            return(
                <div className="container">
                    <Link to='/'>← Back to Dashboard</Link>
                    <h2>User Details</h2>
                    <div className="row row-alt">
                        <div>First Name:</div>
                        <div>{user.first_name}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Last Name:</div>
                        <div>{user.last_name}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Address 1:</div>
                        <div>{user.address_1}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Address 2:</div>
                        <div>{user.address_2}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Town:</div>
                        <div>{user.town}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Region:</div>
                        <div>{user.region}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Country:</div>
                        <div>{user.country}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Post Code:</div>
                        <div>{user.post_code}</div>
                    </div>
                    <div className="row row-alt">
                        <div>Contact Number:</div>
                        <div>{user.contact_number}</div>
                    </div>
                    <br />
                    <Link to={ "/edit-user/" + this.props.match.params[0] } className="btn caption">Edit User</Link>
                </div>
            )
        } else {
            return(
                <div className="container">
                    <h1>Loading...</h1>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params[0];
    const users = state.firestore.data.users;
    const user = users ? users[id] : null;
    return {
        user: user
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(UserDetails)