import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'
import MessagesContainerSad from '../../posts-components/sadness/MessagesContainerSad'
import CreateSadPost from '../../posts-components/sadness/createNewPost'
import Preload from '../../components/preload-component'
import config from '../../../config/config.json'
import Section from '../../layout/Section'

import useFetch from '../../hooks/useFetch'

function Sadness() {
  const { data, loading } = useFetch(`${config.baseUrl}sadpost`)
  
  return (
    <Section>
      <div className="w-full xl:w-4/5">
        <h1 className='font-bold text-2xl hidden xl:block mb-2'>Sadness</h1>
        <CreateSadPost />

        <div className="grid lg:grid-cols-2 gap-4">
          {data.length > 0 && data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post, index) => (
            <div key={index}>
              <MessagesContainerSad {...post} />
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

export default Sadness