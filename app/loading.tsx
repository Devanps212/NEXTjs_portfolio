'use client'
import React from 'react'
import { DNA } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 z-50">
      <DNA
        visible={true}
        height="100"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}

export default Loader
