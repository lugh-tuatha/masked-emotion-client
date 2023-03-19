import React from 'react'
import './devs.css'


import * as Bs from "react-icons/bs";

function Devs() {
  return (
    <div className="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" src="https://i1.sndcdn.com/avatars-000429490611-okb192-t240x240.jpg" />
          </div>
          <div class="team-content">
            <h3 class="name">Ace </h3>
            <h4 class="title">Web Developer</h4>
          </div>
          <ul class="social">
          <li><a href=""><Bs.BsFacebook/></a></li>
            <li><a href=""><Bs.BsInstagram/></a></li>
            <li><a href=""><Bs.BsTwitter/></a></li>
            <li><a href=""><Bs.BsLinkedin/></a></li>
          </ul>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" src="https://i.pinimg.com/originals/f7/e1/41/f7e14135aa7641d40c6aa2506ad96828.jpg" />
          </div>
          <div class="team-content">
            <h3 class="name">Charm</h3>
            <h4 class="title">Web Developer</h4>
          </div>
          <ul class="social">
          <li><a href=""></a></li>
          <li><a href=""><Bs.BsFacebook/></a></li>
            <li><a href=""><Bs.BsInstagram/></a></li>
            <li><a href=""><Bs.BsTwitter/></a></li>
            <li><a href=""><Bs.BsLinkedin/></a></li>
          </ul>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" src="https://64.media.tumblr.com/7f4a230056d8dec47e271a4396a4fb52/99a865e4ea605900-e6/s1280x1920/f7f547ea480e008fc39e566f630bd4efb12fb010.jpg" />
          </div>
          <div class="team-content">
            <h3 class="name">Ismael </h3>
            <h4 class="title">Web Developer</h4>
          </div>
          <ul class="social">
          <li><a href=""><Bs.BsFacebook/></a></li>
            <li><a href=""><Bs.BsInstagram/></a></li>
            <li><a href=""><Bs.BsTwitter/></a></li>
            <li><a href=""><Bs.BsLinkedin/></a></li>
          </ul>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" src="https://i.pinimg.com/originals/6f/8b/eb/6f8beba4eb294361498fcbbea4e30ccf.jpg" />
          </div>
          <div class="team-content">
            <h3 class="name">Cholo </h3>
            <h4 class="title">Web Developer</h4>
          </div>
          <ul class="social">
          <li><a href=""><Bs.BsFacebook/></a></li>
            <li><a href=""><Bs.BsInstagram/></a></li>
            <li><a href=""><Bs.BsTwitter/></a></li>
            <li><a href=""><Bs.BsLinkedin/></a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Devs