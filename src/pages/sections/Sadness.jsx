import React, { useState, useEffect } from 'react'
import './sections.css'

import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import MessagesContainerSad from '../../posts-components/sadness/MessagesContainerSad'
import CreateSadPost from '../../posts-components/sadness/createNewPost'

function Sadness() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/sadpost').then(response => {
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

          <CreateSadPost />

          <div>
            <div>
              {posts.length > 0 && posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => {
                return <MessagesContainerSad {...post} />;
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sadness