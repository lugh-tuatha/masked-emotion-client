import React, { useState, useEffect } from 'react';

import { GrClose } from 'react-icons/gr';
import { BsCheckCircleFill } from 'react-icons/bs';

import { motion, AnimatePresence } from 'framer-motion';

function PostedSuccessfullyAlert() {
  return (
    <AnimatePresence>
      <motion.div 
        className='flex w-max justify-between items-center px-5 py-2.5 gap-7 rounded-xl bg-successLight absolute bottom-10 right-10'
        initial = {{
          y : 200,
          opacity : 0
        }}
        animate = {{
          y : 0,
          opacity : 1
        }}
        transition = {{
          duration : .3,
          type : "spring",
          stiffness : 240,
        }}
        exit = {{
          y: 200,
          opacity: 0
        }}
      >
        <div className='p-2 text-lg rounded-full flex bg-success text-white'>
          <BsCheckCircleFill />
        </div>
        <p>posted successfully</p>
        <GrClose 
          className='cursor-pointer'
          onClick={() => setShowAlert(false)}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default PostedSuccessfullyAlert