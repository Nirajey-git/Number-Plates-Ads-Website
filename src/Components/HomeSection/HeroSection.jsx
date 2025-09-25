import React, {useState} from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slideimg from '../../assets/slidesImages/Number-Plate-Cover.jpg';
import porsche from '../../assets/slidesImages/Porsche-Cover.jpg';
import simage from '../../assets/slidesImages/simages.jpg';


const slides = [ slideimg, porsche, simage];


export const HeroSection = () => {
    const [curr, setCurr ] = useState(0);

    const prev = () => setCurr(curr => curr === 0 ? slides.length-1 : curr-1);
    const next = () => setCurr(curr => curr === slides.length - 1 ? 0 : curr +1 );

return (
    <div className='m-auto mt-3  overflow-hidden rounded-lg relative'>
        <div className=' flex justify-center items-center'>
            <h1 className='text-2xl text-center font-sans'>Products Demo</h1>

        </div>
        <div className=' flex w-full h-auto items-center justify-centre transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>

        {slides.map((slidein, index) => (
            <img key={index} src={slidein} alt=''  />

        ))}

        </div>
        <div className='absolute inset-0 flex items-center justify-between p-1 md:p-4'>
            <button onClick={prev} className='p-1 rounded-full shadow bg-white text-gray-800 '>
                <FaChevronLeft className='size-3 md:size-5'/>
            </button>
            <button  onClick = {next} className='p-1 rounded-full shadow bg-white text-gray-800 '>
                <FaChevronRight className='size-3 md:size-5'/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map ((slide, i) => (
                    <div className={`transition-all duration-300 ease-in-out w-2 h-2 rounded-full bg-blue-300 cursor-pointer hover:bg-blue-500 ${curr === i ? "p-1" : "bg-opacity-50" } md:w-3 md:h-3`}>
                        
                    </div>

                ))}

            </div>
        </div>
        
    

        
    </div>
)
}
