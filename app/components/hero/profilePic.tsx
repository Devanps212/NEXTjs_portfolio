import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center p-10'>
      <Image 
          src='https://res.cloudinary.com/dlkrxem40/image/upload/v1723128574/profile/IMG_2360_ip0h5g.jpg' 
          alt='profile'
          className='rounded-full shadow-sm object-cover h-96 w-96'
          width={500}
          height={500} 
      />
    </div>
  )
}
export default Hero
