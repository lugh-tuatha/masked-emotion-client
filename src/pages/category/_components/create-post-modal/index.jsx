import React, { useState, useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import config from '../../../../../config/config.json'
import './create-post-modal.css'

import { useMutation, useQueryClient } from '@tanstack/react-query';

import axios from 'axios';
import * as Ai from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';

import Button from '../../../../components/shared/button';

function CreatePostModal({ open, onClose, onSuccess }) {
  const queryCLiet = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (post) => {
      return axios.post(`${config.baseUrl}`, post )
    },
    onSuccess: (post) => {
      queryCLiet.invalidateQueries({queryKey: ["posts"]})
      onSuccess()
    },
    onError: (error) => {
      console.log('Error:', error)
    }
  })

  const [codename, setCodename] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [files, setFiles] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('uncategorize');
  const [redirect, setRedirect] = useState(false);

  const previewFile = (file) => {
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)
      }
    } else {
      setImage("")
    }
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    setFiles(file)
    previewFile(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({
      image: image,
      codename: codename,
      title: title,
      category: category,
      summary: summary,
    })
    console.log(isPending)
  }

  const backdrop = {
    visible : { opacity : 1 },
    hidden : { opacity : 0 }
  }

  const modal = {
    hidden: {
      scale: 0,
    },
    visible:{
      y: '325px',
      scale: 1,
      transition: {
        delay: 0.2,
      }
    }
  }

  if (!open) return null;
  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        className='fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black z-10'
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          variants={modal}
        >
  
          <div onClick={(e) => { e.stopPropagation()  }} className='modal absolute top-1/2 left-1/2 z-30'>
            <div className='mx-8 my-6'>
              <div className='flex items-center justify-between mb-4 pb-2 modal-header'>
                <h1 className='text-xl font-semibold'>CREATE A POST</h1>
                <Ai.AiOutlineClose onClick={onClose} size={30} className='cursor-pointer' />
              </div>

              <div className='modal-body'>
                <form onSubmit={handleSubmit}>
                  <div className="sm:flex justify-between px-0 sm:px-6">
                    <select
                    onChange={ev => setCategory(ev.target.value) }  
                    className='classic h-12 w-full mb-3 sm:mb-0 sm:w-auto'>
                      <option value="uncategorize">Uncategorize</option>
                      <option value="love">Love</option>
                      <option value="sadness">Sadness</option>
                      <option value="anger">Anger</option>
                    </select>
                    <input className='w-full sm:w-auto' type="codename" placeholder='CODENAME' required value={codename} onChange={ev => setCodename(ev.target.value)} />
                  </div>

                  <div className="flex flex-col py-4 px-0 sm:px-6 gap-3">
                    <input type="title" placeholder='TITLE' value={title} required onChange={ev => setTitle(ev.target.value)} />
                    <textarea type="summary" placeholder='CONTENT' value={summary} required onChange={ev => setSummary(ev.target.value)} className="placeholder:text-white" />
                    <div className='flex flex-col'>
                      <label htmlFor="avatar" className='font-semibold'>Select Avatar</label>
                      <input className='mb-2' type="file" id="avatar" onChange={e => handleChange(e)}/>
                      {image ? (
                        <img className='image-preview' src={image} alt="preview image" />
                      ) : (
                        <img className='image-preview' src='/image/default-avatar.png' alt='preview image' />
                      )}
                      <p>This is the default avatar.</p>
                    </div>
                  </div>

                  <div className='w-28 mx-auto'>
                    <Button type="submit" value="post" disabled={isPending}>
                      {!isPending ? (
                        <div  className='flex items-center gap-2'>
                          <Ai.AiFillCheckCircle /> 
                          <span>POST</span>     
                        </div>
                      ) : (
                        <div className='px-1'>
                          <BeatLoader 
                          color="#36d7b7" 
                          loading={isPending}
                          size={10} />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CreatePostModal