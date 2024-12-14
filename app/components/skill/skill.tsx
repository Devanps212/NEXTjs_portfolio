import Image from 'next/image'
import React from 'react'
import { ImagesSkills } from '@/app/types/skills/image'

const SkillsImages = ({
  images, 
  title
}:{
  images: ImagesSkills[], 
  title: string
}) => {
  return (
    <div className='bg-yellow-300 rounded-lg'>
        <h2 className='font-semibold text-center text-3xl p-3'>{title}</h2>
        <div className={`p-5 flex ${images.length == 2 ? '' : 'flex-col'} space-y-3`}>
          {
              images.length > 3 ? (
                <>
                  <div className='flex justify-center items-center'>
                  {
                    images.slice(0, 4).map(({src, alt}, index)=>(
                      <Image
                      key={index+1}
                      src={src}
                      alt={alt}
                      width={100}
                      height={100}
                      className='p-3 mx-1 bg-white border rounded-xl h-16 w-16'/>
                    ))
                  }
                  </div>
                  <div className='flex justify-center items-center'>
                  {
                    images.slice(4).map(({src, alt}, index)=>(
                      <Image
                      key={index+1}
                      src={src}
                      alt={alt}
                      width={100}
                      height={100}
                      className='p-3 mx-1 bg-white border rounded-xl h-16 w-16'/>
                    ))
                  }
                  </div>
                </>
              ) :(
                <div className='flex justify-center items-center'>
                  {
                    images.map(({src, alt}, index)=>(
                      <Image
                      key={index+1}
                      src={src}
                      alt={alt}
                      width={100}
                      height={100}
                      className='p-3 mx-1 bg-white border rounded-xl h-16 w-16'/>
                    ))
                  }
                </div>
              )
            }
        </div>
      </div>
  )
}

export default SkillsImages
