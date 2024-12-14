import Link from 'next/link'
import React from 'react'
import { FaMoon } from 'react-icons/fa'
import './navbar.css'

const Nav = () => {
  return (
    <header className='px-20 py-8 fixed w-screen'>
        <nav className='navbar text-white rounded-full shadow-lg'>
            <div className='flex justify-between items-center px-28 h-20'>
                <Link href="/" className='outline-none'>
                <h1 className='text-[50px] font-bold tracking-wide'>Devan PS</h1>
                </Link>
                <ul className='flex space-x-16 text-xl items-center nav-items'>
                    <li><Link href='/pages/skills'>Skills</Link></li>
                    <li><Link href='/'>Projects</Link></li>
                    <li><Link href='/'>Contact-Me</Link></li>
                    <li><Link href='/'><FaMoon/></Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Nav
