import React, { useEffect, useState } from 'react';
import './sections.css';

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import MessagesContainer from '../../components/messages-container';
import CreatePost from '../../components/create-post';

function Love() {
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
        <div className="col-lg-3 m-0 p-0">
          <Sidebar />
        </div>

        <div className="col-lg-9 p-0">
          <h1>Love</h1>
          <CreatePost />

          <div>
            {posts.length > 0 && posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => {
              return <MessagesContainer {...post} />;
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Love;