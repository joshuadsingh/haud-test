import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect, reduxFirebase } from 'react-redux-firebase'
import { compose } from 'redux';
import {deleteUser, fetchUsers} from '../../store/actions/userActions'


function Dashboard(props){
    useEffect(() => {
        props.fetchUsers();
    }, [])

    const deleteUserHandler = (e) =>  {
        e.preventDefault();
        const userId = e.target.dataset.id;
        props.deleteUser(userId);
    }

    return(
        <div className="container">
            <h2>Users</h2>
            <div className="list">
                {
                    (props.userData.loading) ?
                    <h2>Loading...</h2> :
                    (props.userData.users) &&
                    Object.entries(props.userData.users).map(([user, index]) => {
                        const userItem = props.userData.users[user];
                        return(
                            <div key={user} className="row">
                                <div>
                                    <Link to={ '/users/' + user } className="list-user">{ `${userItem.first_name} ${userItem.last_name}` }</Link>
                                </div>
                                <div>
                                    <Link to={ '/edit-user/' + user } className="caption btn btn-small">Edit</Link>
                                </div>
                                <div className="delete caption" onClick={deleteUserHandler} data-id={user}>Delete</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        deleteUser: (user) => dispatch(deleteUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)