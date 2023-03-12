import React from 'react'
import '../signup-form/signup-form.css'
import './login-form.css'

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

import { Link } from "react-router-dom";


function LoginForm() {
  return (
    <>
      <div className="form-container text-center">
        <h2>LOGIN</h2>
        <img src="https://th.bing.com/th/id/OIG.NUVCQ0M1MzM3NzM3ODc0?pcl=1b1a19&pid=ImgGn" />
        <form className="text-white">
          <div className='mt-4 input-container'>
            <input type="email" className="mb-4" placeholder='EMAIL ADDRESS'/>
            <AiIcons.AiOutlineMail size={28} className='input-icon'/>
          </div>

          <div className='input-container'>
            <input type="password" className="mb-4" placeholder='PASSWORD'/>
            <BiIcons.BiKey size={28} className='input-icon'/>
          </div>
          
          <input type="submit" value="SIGN-UP" className="px-5 mb-3" />

          <p className='mb-2'>Or login with</p>
          <div>
            <BsIcons.BsFacebook size={28}/>
            <AiIcons.AiOutlineGoogle size={32}/>
          </div>

          <p className='mt-3'>No account yet? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </>
  )
}

export default LoginForm