import React from 'react'
import passion from '../../assets/slidesImages/passion.jpg'
import commitment from '../../assets/slidesImages/commitment.jpg'
export const CompanyInfo = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center mt-6 mb-6 p-4 text-center'>
        <div className='flex flex-col justify-center items-center m-4 p-4'>
            <img src={passion}alt="our passion" className=' w-64 h-64 rounded-full hover:scale-105 transition-transform'/>
            <h2 className='font-semibold mt-3'>Our Passion</h2>
            <p className='mt-1 '>At Number Plate Advertising, we're passionate about providing a quality product. Our covers are designed to cover up the screw holes in the registration plates thus providing a superior appearance.</p>
        </div>
         <div className='flex flex-col justify-center items-center m-4 p-4'>
            <img src={commitment} alt="our passion" className='w-64 h-64 rounded-full hover:scale-105 transition-transform'/>
            <h2 className='font-semibold'>Our Commitment</h2>
            <p className='mt-1'>We're committed to providing our customers with exceptional service and support. If you have any questions or concerns, our team of experts are always here to help.  We also offer  100% satisfaction guarantee.</p>
        </div>
    </div>
  )
}
