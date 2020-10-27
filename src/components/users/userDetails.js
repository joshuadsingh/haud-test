import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchUser } from '../../store/actions/userActions'

function UserDetails(props){
    useEffect(() => {
        props.fetchUser(props.userId)
    }, [])

    if (!props.userData.loading) {
        return(
            <div className="container">
                <Link to='/'>← Back to Dashboard</Link>
                <h2>User Details</h2>
                <div className="row row-alt">
                    <div>First Name:</div>
                    <div>{props.userData.users.first_name}</div>
                </div>
                <div className="row row-alt">
                    <div>Last Name:</div>
                    <div>{props.userData.users.last_name}</div>
                </div>
                <div className="row row-alt">
                    <div>Address 1:</div>
                    <div>{props.userData.users.address_1}</div>
                </div>
                <div className="row row-alt">
                    <div>Address 2:</div>
                    <div>{props.userData.users.address_2}</div>
                </div>
                <div className="row row-alt">
                    <div>Town:</div>
                    <div>{props.userData.users.town}</div>
                </div>
                <div className="row row-alt">
                    <div>Region:</div>
                    <div>{props.userData.users.region}</div>
                </div>
                <div className="row row-alt">
                    <div>Country:</div>
                    <div>{props.userData.users.country}</div>
                </div>
                <div className="row row-alt">
                    <div>Post Code:</div>
                    <div>{props.userData.users.post_code}</div>
                </div>
                <div className="row row-alt">
                    <div>Contact Number:</div>
                    <div>{props.userData.users.contact_number}</div>
                </div>
                <br />
                <Link to={ "/edit-user/" + props.userId } className="btn caption">Edit User</Link>
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
        fetchUser: (user) => dispatch(fetchUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails)