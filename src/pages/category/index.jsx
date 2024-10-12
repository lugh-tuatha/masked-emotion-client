import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import PostContainer from './_components/post-container';
import CreatePostContainer from './_components/create-post-container';
import PostContainerSkeleton  from './_components/post-container-skeleton'
import config from '../../../config/config.json'
import MainLayout from '../../layout/MainLayout'
import LoadingHeadsUp from './_components/loading-heads-up';
import ReleaseSidebar from './_components/release-sidebar';

function Category() {
  const params = useParams()
  console.log(params.category)

  const { data, isLoading } = useQuery({
    queryKey: ["posts", params.category],
    queryFn: () => 
      axios.get(`${config.baseUrl}/category/${params.category}`)
        .then((response) => response.data )
        .catch((error) => console.log(error) )
  })

  console.log(data)

  const [ showHeadsUp, setShowheadsUp ] = useState(false)

  const showHeadsUpModal = () => {
    if(isLoading){
      setTimeout(() => {
        if (isLoading) {
          setShowheadsUp(true)
        }
      }, 7500);
    }
  }

  useEffect(() => {
    showHeadsUpModal()
  }, [isLoading])

  const pageMessages = {
    love: "Don't let the world slowly steal what little love you have left.",
    sadness: "Your tears are never a sign of weakness, but rather of enormous strength.",
    anger: "Your anger is valid, but don't allow it to manifest in hurtful words and actions."
  }

  return (
    <MainLayout>
      <div className="container-width lg:flex lg:mt-8 lg:pb-24">
        <div className="mb-4 mr-10 xl:mr-0 lg:mb-0 w-full lg:w-1/5">
          <ReleaseSidebar />
        </div>
        
        <div className="w-full xl:w-4/5">
          <h1 className='font-bold text-2xl uppercase underline'>{params.category}</h1>
          <p className='opacity-75'>{pageMessages[params.category] || ""}</p>
          <CreatePostContainer />

          <div className="grid lg:grid-cols-2 gap-4">
            {data?.results > 0 && data.emotions
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post, index) => (
              <div key={index} >
                <PostContainer {...post} />
              </div>
            ))}
          </div>

          {isLoading && (
            <div className="grid lg:grid-cols-2 gap-4">
              <PostContainerSkeleton />
              <PostContainerSkeleton />
              <PostContainerSkeleton />
              <PostContainerSkeleton />

              {showHeadsUp && (
                <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
                  <div className='heads-up h-2/5 '>
                    <LoadingHeadsUp />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      </MainLayout>
  )
}

export default Category