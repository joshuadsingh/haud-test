import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect, reduxFirebase } from 'react-redux-firebase'
import { compose } from 'redux';
import {deleteUser} from '../../store/actions/userActions'


function Dashboard(props){
    const { users } = props;

    function deleteUser (e)  {
        e.preventDefault();
        const userId = e.target.dataset.id;
        props.deleteUser(userId)
    }

    return(
        <div className="container">
            <h2>Users</h2>
            <div className="list">
                {
                    (users) ?
                    users.map((user) => {
                        return(
                            <div key={user.id} className="row">
                                <div>
                                    <Link to={ '/users/' + user.id } className="list-user">{ `${user.first_name} ${user.last_name}` }</Link>
                                </div>
                                <div>
                                    <Link to={ '/edit-user/' + user.id } className="caption btn btn-small">Edit</Link>
                                </div>
                                <div className="delete caption" onClick={deleteUser} data-id={user.id}>Delete</div>
                            </div>
                        )
                    })
                    :
                    <h2>Loading...</h2>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => dispatch(deleteUser(user))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(Dashboard)