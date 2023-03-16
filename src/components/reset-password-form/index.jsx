import React, { Component } from 'react';
import './reset-password.css'

import { Link } from 'react-router-dom'
import { render } from 'react-dom'

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    console.log(email);
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert(data.status);
      })
  }
  render() {
    return (
      <div className="form-container">
        <h2>Reset Password?</h2>
        <form className='reset-form' onSubmit={this.handleSubmit}>
          <div>
            <label>Email address</label> <br />
            <input type="email" className='w-100' onChange={(e) => this.setState({ email: e.target.value })}/> <br />
            <input type="submit" value="Submit" className='w-100 my-2'/> <br />
            <Link to="/signup" className='my-2 text-end'><p>Sign Up</p></Link>
          </div>
        </form>
      </div>
    )
  }

}