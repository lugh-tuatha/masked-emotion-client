import React from 'react'
import './footer.css'

import * as Go from 'react-icons/go'
import * as Ai from 'react-icons/ai'
import * as Bs from "react-icons/bs";

import Logo from '../../assets/icons/logo.png'

import Button from '../button';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer px-0">
      <div className='row'>
        <div className="col-lg-4 footer1">
          <h4>Who ARE WE?</h4>
          <img src={Logo} alt="" />
          <p>Our website provides a safe and supportive community for individuals to share their feelings and connect with others who may be going through similar experiences</p>
          <div className="address">
            <div className="addressIcon"><Go.GoLocation id='add-icn'/><span>123 Main Street,Anytown, USA 12345</span>
            </div>
            <div className="addressIcon"><Go.GoMail id='add-icn'/><span>Email: info@emowall.com</span>
            </div>
            <div className="addressIcon"><Ai.AiFillPhone id='add-icn'/><span>Phone: +1 (555) 123-4567</span>
            </div>
          </div>
        </div>
        <div className="col-lg-8 footer2">
          <div className="footer-content">
            <h4>QUICK LINKS</h4>
            <p><a href="http://">HOME</a></p>
            <p><a href="http://">ABOUT US</a></p>
            <p><a href="http://">RELEASE</a></p>
            <h4>WANT TO HIRE US?</h4>
            <Link to="/developers"><p>The Developers</p></Link>
            <h4>FOLLOW US ON SOCIAL MEDIA</h4>
            <div className="icn">
                  <a link=''><Bs.BsFacebook/></a>
                  <a link=''><Bs.BsInstagram/></a>
                  <a link=''><Bs.BsTwitter/></a>
                </div>
          </div>
          <div className="footer-content2">
            <h4>HOW WE CAN HELP YOU?</h4>
            <form className='foootertxt'>
            <div className="frmIcn1">
                <Bs.BsPersonCircle className='prfl' size={30}/>
              <input type="text" placeholder='FULLNAME' required='required'/>
              </div>
              <div className="frmIcn1">
              <Ai.AiFillMail className='prfl' size={30}/>
              <input type="email" placeholder='EMAIL ADDRESS' required='required'/>
              </div>
              <div className="frmbtn">
                <Button>SEND</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer