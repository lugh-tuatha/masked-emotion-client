import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import waitingGif from '../../../../assets/img/wait-kitten.gif'

function LoadingHeadsUp() {
  const modal = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className='w-full h-full bg-white border-primary border-2'
      >
        <div className='py-2 border-b-2 border-primary bg-primary'>
          <h1 className='text-2xl text-center font-bold text-white'>Heads up!!</h1>
        </div>
        <div>
          <p className='text-xl text-center mt-2'>Sometimes it takes time to load 😭😔😔</p>
          <img src={waitingGif} alt="waiting gif" className='h-40 mx-auto'/>
          <p className='opacity-70 text-center'>The initial loading time is 1 to 2 minutes because we are using a free server.</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingHeadsUp