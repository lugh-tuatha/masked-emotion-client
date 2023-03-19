import React, { useState, useEffect } from 'react'
import './sections.css'

import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import MessagesContainerAnger from '../../posts-components/anger/messages-container-anger'
import CreateAngerPost from '../../posts-components/anger/create-angerpost'


function Anger() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/angerpost').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="row w-90 mx-auto mt-4">
        <div className="col-lg-3 m-0 p-0">
          <Sidebar />
        </div>

        <div className="col-lg-9 p-0">
          <h1>Anger</h1>

          <CreateAngerPost />

          <div>
            <div>
              {posts.length > 0 && posts.map(post => {
                return <MessagesContainerAnger {...post} />;
              })}
            </div>
          </div>

          <div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Anger