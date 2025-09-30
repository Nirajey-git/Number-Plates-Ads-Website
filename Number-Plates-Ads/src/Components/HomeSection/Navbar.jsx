import React from 'react'
import { useState } from 'react';
import logo from '../../assets/Number-Plate-Adslogo.png';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=' sticky bg-white drop-shadow-md z-50 top-0'>
        <header className=' flex justify-between px-2 py-2 items-center md:px-24  '>
        <img src={logo} alt="Number Plates Ads Logo" className='w-24 hover:cursor-pointer xl:ml-7 xl:w-32'/>
        <nav className='md:flex '>
            <ul className=' hidden md:flex justify-between gap-8 list-none text-lg cursor-pointer'>
                <li className='font-sans transition-all hover:text-yellow-600 active:text-yellow-600'><NavLink to="/">Home</NavLink></li>
                <li className='font-sans transition-all hover:text-yellow-600'><NavLink to="/about">About</NavLink></li>
                <li className='font-sans transition-all hover:text-yellow-600'><NavLink to="">Products</NavLink></li>
                <li className='font-sans transition-all hover:text-yellow-600'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        <i className={`xl:hidden block text-5xl cursor-pointer ${isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}`} onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-full left-0 w-full bg-[#fcfcfc] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform z-50 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><NavLink to="/"  onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><NavLink to="/about"  onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><NavLink to=""  onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
            <li className='list-none w-full text-center p-4 hover:bg-text-400 transition-all cursor-pointer'><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>




        </div>
        </header>
    </div>
  )
}
