import React from 'react'
import '../signup-form/signup-form.css'
import './login-form.css'

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";


function LoginForm() {
  return (
    <div>
      <div className="form-container">
        <h2>LOGIN</h2>
        <img src="https://th.bing.com/th/id/OIG.NUVCQ0M1MzM3NzM3ODc0?pcl=1b1a19&pid=ImgGn" />
        <form className="text-white">
          <label>EMAIL ADDRESS</label> <br />
          <input type="email" className="mb-4" />
          {/* <AiIcons.AiOutlineMail size={28}/> */}

          <label>PASSWORD</label> <br />
          <input type="password" className="mb-4" />
          {/* <BiIcons.BiKey size={28}/> */}

          <p className='mt-3'>Or login with</p>
          <div>
            <BsIcons.BsFacebook size={28}/>
            <AiIcons.AiOutlineGoogle size={32}/>
          </div>

          <input type="submit" value="SIGN-UP" className="px-5 mt-3" />
          <p className='mt-3'>No account yet? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm