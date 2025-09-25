import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../../assets/Number-Plate-Adslogo.png';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-gray-200 mt-6 rounded-t-lg mb-0'>
    <div className='flex flex-col justify-center md:flex md:flex-row md:justify-evenly p-4 bg-white/70 '>
       <div className='mt-3 gap-2'>
        <img src={logo} alt="Mandir logo" className='h-16' />
        <p>The best in the Sydney</p>
         <div className='flex gap-4 mt-2 '>
        <BsFacebook  className='size-6 text-blue-500'/>
        <FaInstagram className='size-6 text-pink-600' />
        </div>
       </div>
       <div className='flex flex-col justify-center p-3'>
        <h1 className='text-xl font-semibold mb-2'>Quick Links</h1>
        <ul className='flex flex-col justify-center gap-3 font-normal text-md'>
            <li><a href="/">Home</a></li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
       </div>

       <div className=' gap-2 p-3'>
        <a href="mailto:Numberplatesads@gmail.com" className="flex items-center gap-2">
            <MdEmail className="size-6" />
            Numberplatesads@gmail.com
        </a>


       </div>
      
    </div>
    <hr className='mx-5'/>
    <footer>
        <div className='text-center p-3 bg-white/70'>
            <p>© {currentYear} Number Plates Ads. All rights reserved.</p>
        </div>
    </footer>
    
    </div>
  )
}
