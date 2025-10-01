import React from 'react'
import measurement from '../../assets/slidesImages/measure.jpg';


export const Measurement = () => {
  return (
     <div className='flex flex-col-reverse md:flex-row justify-center mx-auto items-center p-2'>
            <div className='md:w-1/2 p-1 flex justify-center'>
                <img src={measurement} alt="image" className='h-80 w-full  md:w-[80%] rounded-lg'/>
            </div>
            <div className='md:w-1/2 p-4 md:p-3'>
                <h2 className='text-center font-semibold text-2xl mb-3'>Always check your measurements</h2>
                <p className='text-center text-lg'>Please check and confirm your measurements against the product items.  If you can't find what you need, please call 0415 45 45 45 or email us on <a href="" className='hover:text-blue-500'>sales@numberplateads.com.au</a></p>
            </div>
        </div>
  )
}
