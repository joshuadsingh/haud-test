import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchUser, deleteUser, updateUser } from '../../store/actions/userActions'

function EditDetails(props){
    useEffect(() => {
        props.fetchUser(props.userId)
    }, [])

    const handleSubmit = (e) =>  {
        e.preventDefault();
        var formData = new FormData(e.target)
        var formObj = {};
        formData.forEach((value, key) => {formObj[key] = value});
        const dataUpdate = {[props.userId]: formObj};
        console.log("props.userId",props.userId);
        props.updateUser(dataUpdate, props.userId);
    }

    const deleteUserHandler = (e) =>  {
        e.preventDefault();
        props.deleteUser(props.userId);
        props.history.push("/");
    }

    if (!props.userData.loading) {
        return(
            <div className="container">
                <Link to='/'>← Back to Dashboard</Link>
                <h2>Edit User:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row row-alt">
                        <label>First Name:</label>
                        <input required name="first_name" defaultValue={props.userData.users.first_name} />
                    </div>
                    <div className="row row-alt">
                        <label>Last Name:</label>
                        <input required name="last_name" defaultValue={props.userData.users.last_name} />
                    </div>
                    <div className="row row-alt">
                        <label>Address 1:</label>
                        <input required name="address_1" defaultValue={props.userData.users.address_1} />
                    </div>
                    <div className="row row-alt">
                        <label>Address 2:</label>
                        <input name="address_2" defaultValue={props.userData.users.address_2} />
                    </div>
                    <div className="row row-alt">
                        <label>Town:</label>
                        <input required name="town" defaultValue={props.userData.users.town} />
                    </div>
                    <div className="row row-alt">
                        <label>Region:</label>
                        <input required name="region" defaultValue={props.userData.users.region} />
                    </div>
                    <div className="row row-alt">
                        <label>Country:</label>
                        <input required name="country" defaultValue={props.userData.users.country} />
                    </div>
                    <div className="row row-alt">
                        <label>Post Code:</label>
                        <input required name="post_code" defaultValue={props.userData.users.post_code} />
                    </div>
                    <div className="row row-alt">
                        <label>Contact Number:</label>
                        <input required name="contact_number" defaultValue={props.userData.users.contact_number} />
                    </div>
                    <br />
                    <div className="d-flex justify-space-between align-items-center">
                        <button onClick={deleteUserHandler} className="delete caption">Delete User</button>
                        <button type="submit" className="btn caption">Update</button>
                    </div>
                </form>
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


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params[0].toString();
    return {
        userData: state.user,
        userId: id
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (user) => dispatch(fetchUser(user)),
        deleteUser: (user) => dispatch(deleteUser(user)),
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditDetails)