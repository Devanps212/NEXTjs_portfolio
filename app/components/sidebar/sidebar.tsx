'use client'
import Link from 'next/link'
import './sidebar.css'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HEADER, SOCIAL_MEDIA } from '@/app/constants'

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isVisible])

  const handleSidebarClose = () => {
    setIsVisible(false)
    closeSidebar()
  }

  return (
    <>
      {isVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={handleSidebarClose}
        ></div>
      )}
      
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 shadow-lg transition-all duration-300 ease-in-out transform ${isVisible ? 'translate-x-0' : '-translate-x-full opacity-0'}`}>
        <div className='flex flex-col items-center py-8 '>
          <ul className='space-y-10 list-items text-2xl'>
            <li>
              <Link href="/" className='outline-none' onClick={handleSidebarClose}>
              <h1 className='text-3xl font-extrabold lg:text-[50px] lg:font-bold tracking-wide'>Devan PS</h1>
            </Link>
            </li>
            {
              HEADER.map(({link, title}, index)=>(
                <motion.div 
                  key={index}
                  whileHover={{ scale:1.1 }}
                  transition={{ type:"tween", stiffness: 100 }}>
                  <li className="block">
                    <Link href={link} onClick={handleSidebarClose} className="w-full sm:w-auto text-center sm:text-left">{title}</Link>
                  </li>
                </motion.div>
              ))
            }
            <li>
              <div
                className="space-x-2 text-2xl flex">
                  {
                    SOCIAL_MEDIA.map(({icon, link, name})=>(
                      <motion.a
                        key={name}
                        href={link}
                        target='_blank'
                        className='cursor-pointer'
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}>
                        {icon}
                      </motion.a>
                    ))
                  }
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
