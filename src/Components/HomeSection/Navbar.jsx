import React from 'react'
import logo from '../../assets/Number-Plate-Adslogo.png';


export const Navbar = () => {
  return (
    <div className=' sticky bg-white drop-shadow-md'>
        <header className=' flex justify-between px-2 py-2 items-center md:px-24  '>
        <img src={logo} alt="Number Plates Ads Logo" className='w-24 hover:cursor-pointer xl:ml-7 xl:w-32'/>
        <nav className='md:flex '>
            <ul className=' hidden md:flex justify-between gap-8 list-none text-lg font-bold cursor-pointer'>
                <li className='font-title transition-all hover:text-sky-600 active:'>Home</li>
                <li className='font-title transition-all hover:text-sky-600'>About</li>
                <li className='font-title transition-all hover:text-sky-600'>Services</li>
                <li className='font-title transition-all hover:text-sky-600'>Contact</li>
            </ul>
        </nav>
        </header>
    </div>
  )
}
