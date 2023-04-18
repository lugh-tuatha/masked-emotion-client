import React, { useState, useEffect } from 'react'
import './sections.css'

import Header from '../../components/Header'
import Sidebar from '../../components/sidebar'
import MessagesContainerAnger from '../../posts-components/anger/MessagesContainerAnger'
import CreateAngerPost from '../../posts-components/anger/CreateAngerPost'
import Preload from '../../components/preload-component'


function Anger() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('https://emowall-backend.onrender.com/angerpost').then(response => {
      response.json().then(posts => {
        setPosts(posts);
        setLoading(false);
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

          <div className='row'>
            {posts.length > 0 && posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => {
              return (
                <div className="col-md-6 mx-0">
                  <MessagesContainerAnger {...post} />
                </div>
              );
            })}
          </div>

          {loading && (
            <div className="row">
              <div className="col-md-6 mx-0">
                <Preload/>
              </div>
          
              <div className="col-md-6 mx-0">
                <Preload/>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Anger