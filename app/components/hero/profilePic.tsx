'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <motion.div 
      className="flex justify-center items-center p-6 md:p-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}>
      <Image
        src="https://res.cloudinary.com/dlkrxem40/image/upload/v1723128574/profile/IMG_2360_ip0h5g.jpg"
        alt="profile"
        className="rounded-full shadow-sm object-cover h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96"
        width={500}
        height={500}
      />
    </motion.div>
  )
}

export default Hero;
