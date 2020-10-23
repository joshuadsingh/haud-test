import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { firestoreConnect, reduxFirebase } from 'react-redux-firebase'
import { compose } from 'redux';
import { deleteUser, updateUser } from '../../store/actions/userActions'

class EditDetails extends Component {
    deleteUser = (e) => {
        e.preventDefault();
        this.props.deleteUser(this.props.match.params[0]);
        this.props.history.push("/");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target)
        var formObj = {};
        formData.forEach((value, key) => {formObj[key] = value});
        this.props.updateUser(this.props.match.params[0], formObj);
    }

    render(){
        const { user } = this.props

        if (user) {
            return(
                <div className="container">
                    <Link to='/'>← Back to Dashboard</Link>
                    <h2>Edit User:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row row-alt">
                            <label>First Name:</label>
                            <input required name="first_name" defaultValue={user.first_name} />
                        </div>
                        <div className="row row-alt">
                            <label>Last Name:</label>
                            <input required name="last_name" defaultValue={user.last_name} />
                        </div>
                        <div className="row row-alt">
                            <label>Address 1:</label>
                            <input required name="address_1" defaultValue={user.address_1} />
                        </div>
                        <div className="row row-alt">
                            <label>Address 2:</label>
                            <input name="address_2" defaultValue={user.address_2} />
                        </div>
                        <div className="row row-alt">
                            <label>Town:</label>
                            <input required name="town" defaultValue={user.town} />
                        </div>
                        <div className="row row-alt">
                            <label>Region:</label>
                            <input required name="region" defaultValue={user.region} />
                        </div>
                        <div className="row row-alt">
                            <label>Country:</label>
                            <input required name="country" defaultValue={user.country} />
                        </div>
                        <div className="row row-alt">
                            <label>Post Code:</label>
                            <input required name="post_code" defaultValue={user.post_code} />
                        </div>
                        <div className="row row-alt">
                            <label>Contact Number:</label>
                            <input required name="contact_number" defaultValue={user.contact_number} />
                        </div>
                        <br />
                        <div className="d-flex justify-space-between align-items-center">
                            <button onClick={this.deleteUser} className="delete caption">Delete User</button>
                            <button type="submit" className="btn caption">Update</button>
                        </div>
                    </form>
                    
                </div>
            )
        } else {
            return(
                <div className="container">
                    <h2>Loading...</h2>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => dispatch(deleteUser(user)),
        updateUser: (user, data) => dispatch(updateUser(user, data))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(EditDetails)