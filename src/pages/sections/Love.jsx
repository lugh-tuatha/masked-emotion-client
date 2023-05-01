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
      <div className="w-10/12 lg:w-9/12 mx-auto flex mt-8">
        <div className="w-1/5">
          <Sidebar />
        </div>

        <div className="w-4/5">
          <h1 className='font-bold text-2xl'>Love</h1>
          <CreatePost />

          <div className="grid grid-cols-2 gap-4">
            {posts.length > 0 && posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => {
              return (
                <div>
                  <MessagesContainer {...post} />
                </div>
              );
            })}
          </div>
          

          {loading && (
            <div className="col-md-6 mx-0">
              <Preload/>
          
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