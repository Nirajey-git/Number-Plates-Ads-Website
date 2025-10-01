import React from 'react'
// import sustainImage from '../../assets/slideImages/porsche.jpg';
import Imagehoi from '../../assets/slidesImages/sustain.jpg';

export const Sustain = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center mx-auto items-center p-2'>
        <div className='md:w-1/2 p-1'>
            <h2 className='text-center font-semibold text-2xl mb-2'>Our Sustainability</h2>
            <p className='text-center text-lg'>We are committed to minimizing our environmental impact by using eco-friendly materials and implementing sustainable practices in our printing process. We believe that sustainability and quality can go hand in hand.</p>
        </div>
        <div className='md:w-1/2 p-1 flex justify-center'>
            <img src={Imagehoi} alt="" className='h-80 w-full  md:w-[80%] rounded-lg'/>
        </div>
    </div>
)
}
