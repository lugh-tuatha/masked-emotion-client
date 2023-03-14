import React, { Component } from 'react';
import './signup-form.css';

import { Link } from "react-router-dom";


export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state={
      fname: "",
      lname: "",
      phone: "",
      password: "",
      cpassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const{ fname, lname, phone, password, cpassword } = this.state;
    console.log(fname, lname, phone, password, cpassword)

    fetch("http://localhost:5000/register",{
      method: "POST",
      crossDomain: true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname,
        lname,
        phone,
        password,
        cpassword
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister")
      })
  }
  render() {
    return (
      <>
        <div className="form-container">
          <h2>LOGO</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex gap-4 mt-3 mb-4">
              <div>
                <label>FIRSTNAME</label>
                <br />
                <input type="text" onChange={(e) => this.setState({ fname: e.target.value })}/>
              </div>
              <div>
                <label>LASTNAME</label>
                <br />
                <input type="text" onChange={(e) => this.setState({ lname: e.target.value })}/>
              </div>
            </div>

            <label>PHONE NUMBER</label> <br />
            <input type="text" className="mb-4 phone-number" onChange={(e) => this.setState({ phone: e.target.value })}/>

            <div className="d-flex gap-4">
              <div>
                <label>PASSWORD</label>
                <br />
                <input type="password" onChange={(e) => this.setState({ password: e.target.value })}/>
              </div>
              <div>
                <label>CONFIRM PASSWORD</label>
                <br />
                <input type="password" onChange={(e) => this.setState({ cpassword: e.target.value })}/>
              </div>
            </div>

            <label className="d-flex mt-2">
              <input type="checkbox" name="terms-and-conditions" value="1" />
              <p className="ms-2 my-auto">
                I AGREE TO THE <a href="#">TERMS AND CONDITIONS</a>
              </p>
            </label>

            <input type="submit" value="SIGN-UP" className="px-5 mt-3" />
            <p className='mt-3'>Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div> 
      </>
    );
  }
}
