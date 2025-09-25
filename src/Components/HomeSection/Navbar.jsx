import React from 'react'
import logo from '../../assets/Number-Plate-Adslogo.png';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className=' sticky bg-white drop-shadow-md z-50 top-0'>
        <header className=' flex justify-between px-2 py-2 items-center md:px-24  '>
        <img src={logo} alt="Number Plates Ads Logo" className='w-24 hover:cursor-pointer xl:ml-7 xl:w-32'/>
        <nav className='md:flex '>
            <ul className=' hidden md:flex justify-between gap-8 list-none text-lg cursor-pointer'>
                <li className='font-sans transition-all hover:text-yellow-600 active:'><NavLink to="/">Home</NavLink></li>
                <li className='font-sans transition-all hover:text-yellow-600'><NavLink to="/about">About</NavLink></li>
                <li className='font-sans transition-all hover:text-yellow-600'>Products</li>
                <li className='font-sans transition-all hover:text-yellow-600'>Contact</li>
            </ul>
        </nav>
        </header>
    </div>
  )
}
