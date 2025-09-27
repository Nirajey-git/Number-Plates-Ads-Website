import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";



export const ContactHead = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row bg-white'>
    <div className='flex flex-col justify-center w-[90%] items-center p-6 m-6 outline-1 outline outline-blue-300 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 md:w-1/3'>
     <AiOutlineMail className='p-3 rounded-full w-16 h-16 bg-slate-100 text-blue-400'/>
     <h2 className='text-lg font-semibold'> Email Address</h2>
     <p>accounts@numberplates.com.au</p>
    </div>
    <div className='flex flex-col justify-center w-[90%] items-center p-6 m-6 outline-1 outline outline-blue-300 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 md:w-1/3'>
     <GiRotaryPhone className='p-3 rounded-full w-16 h-16 bg-slate-100 text-blue-400'/>
     <h2 className='text-lg font-semibold'> Phone Number </h2>
     <p>0415 45 45 45</p>
    </div>
    <div className='flex flex-col justify-center items-center w-[90%] p-6 m-6 outline-1 outline outline-blue-300 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 md:w-1/3'>
     <CiLocationOn className='p-3 rounded-full w-16 h-16 bg-slate-100 text-blue-400'/>
     <h2 className='text-lg font-semibold'> Our Address</h2>
     <p>Unit 25/29 Leighton PI</p>
    </div>

    </div>
  )
}
