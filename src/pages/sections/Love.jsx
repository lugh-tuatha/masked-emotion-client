import React, { useEffect, useState } from 'react';
import './sections.css';

import Header from '../../components/Header';
import Sidebar from '../../components/sidebar';
import MessagesContainer from '../../components/messages-container';
import CreatePost from '../../components/create-post';
import Preload from '../../components/preload-component'

function Love() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('https://emowall-backend.onrender.com/post').then(response => {
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
          <h1>Love</h1>
          <CreatePost />

          <div className="row">
            {posts.length > 0 && posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => {
              return (
                <div className="col-md-6 mx-0">
                  <MessagesContainer {...post} />
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
  );
}

export default Love;