import React from 'react'
import './newsletter.css'
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";

function Newsletter() {
  return (
        <div className="nwslttr">
          <div className="Cntnt1">
            <h3>Join Our Newsletter</h3>
            <p>Stay Up-to-Date with EmoWall News and Updates</p>
          </div>
          <div className="frm">
          <form>
            <div className="frmIcn">
              <Bs.BsPersonCircle className='prfl'/>
            <input type="text" placeholder='FULLNAME' required='required'/>
            </div>
            <div className="frmIcn">
            <Ai.AiFillMail className='prfl'/>
            <input type="email" placeholder='EMAIL ADDRESS' required='required'/>
            </div>
            <div className="frmbtn">
              <button>SUBSCRIBED</button>
            </div>
          </form>
          </div>
        </div>
  )
}

export default Newsletter