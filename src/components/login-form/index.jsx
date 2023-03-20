import React, { Component } from 'react';
import './login-form.css'

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

import { Link } from "react-router-dom";

import logo from '../../assets/icons/logo.png'

import Swal from 'sweetalert2'

export default class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state={
      phone:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { phone, password } = this.state;
    console.log(phone, password);

    fetch("http://localhost:5000/login-user",{
      method: "POST",
      crossDomain: true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        phone,
        password,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister")

        if(data.status=="ok"){
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            timer: 3000,
            showConfirmButton: false
          }).then(() => {
          })
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          
          window.location.href = "../UserDetails"

        }
      })
  }

  render () {
    return (
      <div className='login-parent'>
        <div className="form-container text-center login-container">
          <img src={logo}/>

          <form className="text-white" onSubmit={this.handleSubmit}>
            <div className='mt-4 input-container'>
              <input type="text" className="mb-4 login-input" placeholder='PHONE NUMBER' onChange={(e) => this.setState({  phone: e.target.value })}/>
              <AiIcons.AiOutlineMail size={28} className='input-icon'/>
            </div>

            <div className='input-container'>
              <input type="password" className="login-input" placeholder='PASSWORD' onChange={(e) => this.setState({  password: e.target.value })}/>
              <BiIcons.BiKey size={28} className='input-icon'/>
            </div>
            
            <input type="submit" value="LOG IN" className="px-5 mb-2 mt-3" />

            <p className='m-2'>Or login with</p>
            <div>
              <BsIcons.BsFacebook size={28} style={{ color: 'black' }} className="mx-1"/>
              <AiIcons.AiOutlineGoogle size={32} style={{ color: 'black' }} className="mx-1"/>
            </div>

            <p className='mt-3'>No account yet? <Link to="/signup">Create an account</Link></p>
          </form>

        </div>
      </div>
    )
  }
}
