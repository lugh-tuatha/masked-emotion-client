import React, { useState, useEffect } from 'react'
import './sections.css'

import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import MessagesContainerAnger from '../../posts-components/anger/MessagesContainerAnger'
import CreateAngerPost from '../../posts-components/anger/CreateAngerPost'


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
              {posts.length > 0 && posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => {
                return (
                  <div className="col-md-6">
                    <MessagesContainerAnger {...post} />
                  </div>
                );
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