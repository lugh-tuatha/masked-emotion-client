import React, { useEffect, useState } from 'react';

import MessagesContainer from '../components/messages-container';
import CreatePost from '../components/create-post';
import Preload from '../components/preload-component'
import config from '../../config/config.json'
import MainLayout from '../layout/MainLayout'
import HeadsUp from '../components/modal/HeadsUp';
import Sidebar from '../components/sidebar';

import useFetch from '../hooks/useFetch'

function Love() {
  const [category, setCategory] = useState('love')

  const { data, loading } = useFetch(`${config.baseUrl}/category/${category}`)
  const [ showHeadsUp, setShowheadsUp ] = useState(false)

  const showHeadsUpModal = () => {
    if(loading){
      setTimeout(() => {
        if (loading) {
          setShowheadsUp(true)
        }
      }, 7500);
    }
  }

  useEffect(() => {
    showHeadsUpModal()
  }, [loading])

  const handleCategoryData = (data) => {
    setCategory(data);
  };
  return (
    <MainLayout>
      <div className="container-width lg:flex lg:mt-8 lg:pb-24">
        <div className="mb-4 mr-10 xl:mr-0 lg:mb-0 w-full lg:w-1/5">
          <Sidebar categoryData={handleCategoryData} />
        </div>
        
        <div className="w-full xl:w-4/5">
          <h1 className='font-bold text-2xl hidden xl:block mb-2 uppercase'>{category}</h1>
          <CreatePost />

          <div className="grid lg:grid-cols-2 gap-4">
            {data.results > 0 && data.emotions
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post, index) => (
              <div key={index} >
                <MessagesContainer {...post} />
              </div>
            ))}
          </div>

          {loading && (
            <div className="grid lg:grid-cols-2 gap-4">
              <Preload />
              <Preload />
              <Preload />
              <Preload />

              {showHeadsUp && (
                <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
                  <div className='heads-up h-2/5 '>
                    <HeadsUp />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>


    </MainLayout>
  );
}

export default Love;