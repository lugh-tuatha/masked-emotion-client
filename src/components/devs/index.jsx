import React from 'react'
import './devs.css'

function Devs() {
  return (
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
          <li><a href="#" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Devs