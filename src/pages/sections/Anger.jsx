import React from 'react'

import Header from '../../components/Header'
import Sidebar from '../../components/sidebar'
import MessagesContainerAnger from '../../posts-components/anger/MessagesContainerAnger'
import CreateAngerPost from '../../posts-components/anger/CreateAngerPost'
import Preload from '../../components/preload-component'
import Footer from '../../components/footer'
import config from '../../../config/config.json'

import useFetch from '../../hooks/useFetch'

function Anger() {
  const { data, loading } = useFetch(`${config.baseUrl}angerpost`)

  return (
    <div>
      <Header />
      <div className="container-width lg:flex lg:mt-8 lg:pb-24">
        <div className="mb-4 mr-10 xl:mr-0 lg:mb-0 w-full lg:w-1/5">
          <Sidebar />
        </div>

        <div className="w-full xl:w-4/5">
          <h1 className='font-bold text-2xl hidden xl:block mb-2'>Anger</h1>
          <CreateAngerPost />

          <div className="grid lg:grid-cols-2 gap-4">
            {data.length > 0 && data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post, index) => (
              <div key={index}>
                <MessagesContainerAnger {...post} />
              </div>
            ))}
          </div>
          

          {loading && (
            <div className="grid lg:grid-cols-2 gap-4">
              <Preload/>
              <Preload/>
              <Preload/>
              <Preload/>
            </div>
          )}
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Anger