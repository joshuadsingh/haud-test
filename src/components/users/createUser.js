import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createUser} from '../../store/actions/userActions'
import { Link } from 'react-router-dom'

class CreateUser extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target)
        var formObj = {};
        formData.forEach((value, key) => {formObj[key] = value});

        this.props.createUser(formObj);
        this.props.history.push("/");
    }

    render(){
        return(
            <div className="container">
                <Link to='/'>← Back to Dashboard</Link>
                <h2>Create User:</h2>
                <form onSubmit={this.handleSubmit} className="create-user-form">
                    <div className="row row-alt">
                        <label htmlFor="">First Name:</label>
                        <input required name="first_name" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Last Name:</label>
                        <input required name="last_name" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Address 1:</label>
                        <input required name="address_1" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Address 2:</label>
                        <input name="address_2" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Town:</label>
                        <input required name="town" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Region:</label>
                        <input required name="region" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Country:</label>
                        <input required name="country" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Post Code:</label>
                        <input required name="post_code" type="text"/>
                    </div>
                    <div className="row row-alt">
                        <label htmlFor="">Contact Number:</label>
                        <input required name="contact_number" type="number"></input>
                    </div>
                    <br />
                    <div className="d-flex justify-flex-end align-items-center">
                        <button type="submit" className="btn caption">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(CreateUser)