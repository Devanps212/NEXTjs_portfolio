import Carousel from '@/app/components/bannerSlider/banner'
import React from 'react'
import { PROJECTS, MINI_PROJECTS } from '../../constants/index'

const Projects = () => {


  return (
    <div className='main-content h-screen z-0'>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='heading btn max-w-[100%] xl:max-w-[50%] md:max-w-[55%] mt-10'>
          <Carousel projects={PROJECTS} projectType='main'/>
        </div>
        <div className='heading btn max-w-[80%] xl:max-w-[50%] md:max-w-[55%]'>
          <Carousel projects={MINI_PROJECTS} projectType='mini'/>
        </div>
      </div>
    </div>
  )
}

export default Projects
