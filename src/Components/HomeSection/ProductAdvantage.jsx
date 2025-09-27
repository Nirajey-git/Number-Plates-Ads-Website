import React from 'react'
import product from '../../Assets/slidesImages/products.jpg'

export const ProductAdvantage = () => {
    const Products = [
        {id:1, title:"Clip on covers", img: product},
        {id:2, title:"screw on covers", img: product},
    ]
  return (
    <div className='flex flex-col justify-center  bg-white'>
        <div className='w-full p-6 m-3'>
            <h2 className='text-2xl font-semibold text-center'>Product Advantage</h2>
            <p className='mt-2 p-4'>Number Plate Advertising has a few unique product advantages over our competitors, we are the only company to manufacture and provide both "Clip On" and "Screw On" covers.  This is beneficial as most Victorian customers prefer the screw on covers, whereas, NSW & QLD customers prefer the "Clip On" style covers.  </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4 p-4'>
            {Products.map((product) => (
                <div key={product.id} className='bg-white flex flex-col items-center text-center rounded-xl shadow-lg p-6 hover:scale-105 transition-transform' >
                    <img src={product.img} alt="" className='w-82 h-64 object-cover rounded-lg mb-4'/>
                    <h2 className='text-lg font-semibold'>{product.title}</h2>
                </div>
            )
        )}
        </div>
    </div>
  )
}
