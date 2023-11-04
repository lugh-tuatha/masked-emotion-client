import React from 'react'
import config from '../../../config/config.json'
import useFetch from '../../hooks/useFetch'

import Header from '../../components/Header'
import Sidebar from '../../components/sidebar'
import MessagesContainerAnger from '../../posts-components/anger/MessagesContainerAnger'
import CreateAngerPost from '../../posts-components/anger/CreateAngerPost'
import Preload from '../../components/preload-component'
import Footer from '../../components/footer'
import Section from '../../layout/Section'

function Anger() {
  const { data, loading } = useFetch(`${config.baseUrl}angerpost`)

  return (
    <Section>
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
    </Section>
  )
}

export default Anger