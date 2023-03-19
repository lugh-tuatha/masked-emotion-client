import React, { useState, useEffect } from 'react'
import './sections.css'

import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import MessagesContainer from '../../components/messages-container'


function Sadness() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  
  return (
    <div>
      <Header />
      <div className="row w-90 mx-auto mt-4">
        <div className="col-lg-3 p-0 m-0">
          <Sidebar />
        </div>

        <div className="col-lg-9 p-0">
          <h1>Sadness</h1>

          <div>
            <div>
              {posts.length > 0 && posts.map(post => {
                return <MessagesContainer {...post} />;
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sadness