import React, { Component } from 'react';
import './signup-form.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const{ fname, lname, email, password, cpassword } = this.state;
    console.log(fname, lname, email, password, cpassword)

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
        email,
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
      <div className="form-container">
        <h2>LOGO</h2>
        <form className="text-white" onSubmit={this.handleSubmit}>
          <div className="d-flex gap-4 mb-4">
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

          <label>EMAIL ADDRESS</label> <br />
          <input type="email" className="mb-4" onChange={(e) => this.setState({ email: e.target.value })}/>

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
          <p className='mt-3'>Already have an account? <a href="#">Login</a></p>
        </form>
      </div>
    );
  }
}
