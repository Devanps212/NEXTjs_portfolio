'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaMoon } from 'react-icons/fa'
import './navbar.css'
import { HEADER } from '../../constants/index'
import Sidebar from '../sidebar/sidebar'

const Nav = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar(prev => !prev)
  }

  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <header className='px-16 xl:px-20 py-8 fixed w-screen z-[100]'>
      <nav className='navbar text-white rounded-full shadow-lg'>
        <div className='flex justify-between items-center px-10 md:px-28 h-20'>
          <Link href="/" className='outline-none'>
            <h1 className='text-3xl font-extrabold lg:text-[50px] lg:font-bold tracking-wide'>Devan PS</h1>
          </Link>
          <ul className='flex space-x-16 text-xl items-center nav-items'>
            {
              HEADER.map((list, index)=>(
                list === "Night Mode" 
                ? <li key={index} className='hidden ml:block'><Link href='/'><FaMoon /></Link></li>
                : <li key={index} className='hidden ml:block'><Link href='/pages/skills'>Skills</Link></li>
              ))
            }
          </ul>
          <FaBars
            className='block ml:hidden text-xl font-bolder cursor-pointer'
            onClick={toggleSidebar}
          />
        </div>
      </nav>
      {sidebar && <Sidebar closeSidebar={closeSidebar} />}
    </header>
  )
}

export default Nav
