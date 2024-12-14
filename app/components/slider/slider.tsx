import React from 'react'
import Image from 'next/image'

const Slider = () => {
    const Images = [
        {
            alt:'Skills',
            image:'/skills Icons/icons8-mongodb-480.png'
        },
        {
            alt:'Skills',
            image:'/skills Icons/icons8-express-js-150.png'
        },
        {
            alt:'Skills',
            image:'/skills Icons/physics.png'
        },
        {
            alt:'Skills',
            image:'/skills Icons/node-js.png'
        },
    ]

  return (
    <div className='flex justify-around items-center w-full bg-gray-200 p-7'>
      {
        Images.length > 0 && Images.map((img, index)=>(
            <Image
            className='rounded-full h-32 w-32 p-5 border border-gray-100 bg-white'
            alt={img.alt}
            src={img.image}
            key={index}
            width={500}
            height={500}
            />
        ))
      }
    </div>
  )
}

export default Slider
