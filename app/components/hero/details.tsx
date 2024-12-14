import React from 'react'
import './details.css'

const Details = () => {
  return (
    <div className='about-content flex flex-col justify-center items-center p-10 space-y-4'>
        <h1 className='text-8xl font-bold text-center'>HI, I&apos;M<br/><span className='text-[#FF0004]'>DEVAN .P. S</span></h1>
        <h3 className='text-xl'>MERN STACK DEVELOPER</h3>
        {/* <p className='text-center text-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p> */}
        <button className='italic text-semibold px-7 py-3 rounded-[25px] border bg-gradient-to-r from-[#FFBC2A] to-[#FFDB00] shadow-lg'>
            Download Resume
        </button>
    </div>
  )
}

export default Details
