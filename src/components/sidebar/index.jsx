import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <div className="row">
            <div className="col-lg-3">
                <nav className='sidenav'>
                    <ul>
                    <li><a href="#">Love</a></li>
                    <li><a href="#">Sadness</a></li>
                    <li><a href="#">Anger</a></li>
                    <li><a href="#">Happiness</a></li>
                    <li><a href="#">Regret</a></li>
                    <li><a href="#">Anxiety</a></li>
                    <li><a href="#">Hope</a></li>
                    <li><a href="#">Confusion</a></li>
                    <li><a href="#">Guilt</a></li>
                    <li><a href="#">Gratitude</a></li>
                    <li><a href="#">Fear</a></li>
                    <li><a href="#">Dream</a></li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-9">
                <h1>Love</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad eius dolorem alias. Animi blanditiis quaerat nam sequi. Dolores aperiam molestias at nihil tempora maxime veritatis laboriosam sapiente facere architecto!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat blanditiis, fugit voluptas exercitationem ipsam qui deserunt alias harum ducimus quasi placeat quas adipisci error voluptatem cum at laborum eligendi nemo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a alias iusto saepe, necessitatibus mollitia dolore nesciunt voluptates, laborum eius perferendis quam totam maxime libero nihil ad ratione quisquam voluptatum?</p>
            </div>
        </div>
  )
}

export default Sidebar