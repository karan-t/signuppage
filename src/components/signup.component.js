import React, { Component } from "react";

/**
 * SignUp Component which contains the SignUp form.
 */

export default class SignUp extends Component {
    render() {
        const headerStyle = {
            color: 'darkblue',
            fontFamily: 'inherit',
        }
        return (
            <form>
                <h3 className="headER">WELCOME</h3>

                <h5 style={headerStyle}>Sign Up</h5>

                <div>
                    <br></br>
                </div>
                <div className="form-group">
                    <label>First Name</label><label style={{ color: 'red' }}>*</label>
                    <input type="text" className="form-control" placeholder="Type your first name" />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Type your last name" />
                </div>

                <div className="form-group">
                    <label>Email ID</label><label style={{ color: 'red' }}>*</label>
                    <input type="email" className="form-control" placeholder="Type your official email address" />
                </div>

                <div className="form-group">
                    <label>Password</label><label style={{ color: 'red' }}>*</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div><input type="checkbox" /><label style={{ paddingLeft: '5px' }}>Remember Password
                </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <div></div>
                <p className="forgot-password text-center">
                    Having trouble Signing up?<a href="#"> Contact Support</a>
                </p>
                <p className="forgot-password text-center">Read our Privacy Statement</p>
            </form>
        );
    }
}