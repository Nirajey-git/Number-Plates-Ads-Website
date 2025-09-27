import React from 'react'
import {Link }from 'react-router-dom'


export const Hero = () => {
return (
    <>
    <section className="relative z-10  w-full overflow-hidden bg-gradient-to-br from-[#f9f6ed] via-white to-[#faf4c6] dark:from-gray-900 dark:via-gray-800 dark:to-[#1a3c34] lg:h-[650px]">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="space-y-6 max-w-3xl text-center animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-extrabold leading-tight tracking-tight">
                Advertise Your Number Plates
                <br />
                <span className="bg-gradient-to-r from-[#52AF83] via-[#3d8b63] to-[#2a6b4a] bg-clip-text text-transparent">
                The Modern Way
                </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                Showcase your personality on the road with stylish, custom number plates. Stand out, stay unique, and make every drive unforgettable.
            </p>
            <div className='flex justify-center gap-4'>
                <button className='px-2 py-2 w-32 bg-amber-500 rounded-lg text-white cursor-pointer hover:bg-amber-600 '>Contact Us</button>
                <button className='px-2 py-2 w-32 bg-gray-900 border-[#52AF83] rounded-lg text-white cursor-pointer hover:bg-amber-600 '>View Products</button>

            </div>
                
            </div>
            </div>
        </div>
    </section>
      
    </>
  )
}
