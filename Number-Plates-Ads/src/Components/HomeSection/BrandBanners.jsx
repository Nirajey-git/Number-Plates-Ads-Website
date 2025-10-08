import React, { useEffect } from 'react'
import { useState } from 'react'


export const BrandBanners = () => {
    const [carBrands, setCarBrands] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/brands/")
            .then((res) => res.json())
            .then((data)=> setCarBrands(data))
    }, [])
return (
    <div className='w-full m-auto mt-5 '>
        <div flex justify-between items-center >
            
            <h1 className='text-2xl text-center mt-3  mb-2 font-sans font-semibold '> Top Brands We Worked With</h1>
            <hr className='mt-2'/>
            <div className='m-auto mt-3 w-full overflow-hidden mb-3  '>
                <ul className='flex gap-3 ml-4 mt-3  justify-start items-center animate-infinite-scroll animation-play-state:paused'>
                    {carBrands.map((brand ) => (
                        <li key={brand.name} >
                        <img src={brand.logo} alt=""  className='h-16 p-1 w-28 object-contain'/>
                        </li>
                    ))}
                </ul>

            </div>
            <hr />
        </div>
    </div>
)
}
