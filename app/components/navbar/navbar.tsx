import Link from 'next/link'
import React from 'react'
import { FaMoon } from 'react-icons/fa'
import './navbar.css'

const Nav = () => {
  return (
    <header className='px-16 xl:px-20 py-8 fixed w-50 w-screen z-[100]'>
        <nav className='navbar text-white rounded-full shadow-lg'>
            <div className='flex justify-between items-center px-10 md:px-28 h-20'>
                <Link href="/" className='outline-none'>
                <h1 className='text-xl font-extrabold lg:text-[50px] lg:font-bold tracking-wide'>Devan PS</h1>
                </Link>
                <ul className='flex space-x-16 text-xl items-center nav-items'>
                    <li className='hidden xl:block'><Link href='/pages/skills'>Skills</Link></li>
                    <li className='hidden xl:block'><Link href='/pages/projects'>Projects</Link></li>
                    <li className='hidden xl:block'><Link href='/pages/contactUs'>Contact-Me</Link></li>
                    <li className='text-1xl sm:text-3xl'><Link href='/'><FaMoon/></Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Nav
