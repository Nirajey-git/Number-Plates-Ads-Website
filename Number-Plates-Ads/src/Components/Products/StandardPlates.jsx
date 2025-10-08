import {React, use, useEffect, useState} from 'react'

export const StandardPlates = () => {
    const [StandardPlates, setStandardPlates] = useState([]);

    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/standard-plates/")
            .then((res) => res.json())
            .then((data) => setStandardPlates(data))
    }, [])
  return (
    <div className='flex flex-col justify-center  bg-white'>
            <div className='w-full p-6 m-3'>
                <h2 className='text-2xl font-semibold text-center'>Standard Plates</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 p-4'>
                {StandardPlates.slice(0,3).map((product) => (
                    <div key={product.name} className='bg-white flex flex-col items-center text-center rounded-xl shadow-lg p-6 hover:scale-105 transition-transform' >
                        <img src={product.image} alt="" className='w-82 h-64 object-cover rounded-lg mb-4'/>
                        <h2 className='text-lg font-semibold'>{product.name}</h2>
                    </div>
                )
            )}
            </div>
        </div>
  )
}
