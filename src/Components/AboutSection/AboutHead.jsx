import React from 'react'
import cars from '../../assets/slidesImages/Cars.jpg'
import matt from '../../assets/slidesImages/matt.jpg'
import Niraj from '../../assets/slidesImages/Nirajdp.jpg'

export const AboutHead = () => {
    const Teams = [
        {id:1, name: 'Matt McKeough', role: 'Founder & CEO', img: matt},
        {id:2, name: 'Tish Thomas', role: 'Account Manager', img: ''},
        {id:3, name: 'Angela McKeough', role: 'Product Specialist', img: ''},
        {id:4, name: 'Matt', role: 'Printing Specialist', img: ''},
        {id:5, name: 'Niraj Gajurel', role: 'Screen Printer', img: Niraj},

    ]
  return (
    <div>
        <div className='flex flex-col justify-center mt-4'>
        <div className='flex justify-center items-center'>
            <img src={cars} alt="About Images"  className='mx-[90%] h-[320px]'/>
        </div>
        <div className='m-4 p-4'>
            <p> At Number Plates Ads Hornsby, we specialize in stylish and durable number plate covers that not only protect your plates but also make your vehicle stand out. Whether you’re after standard clear covers, premium finishes, or Euro-style designs, we’ve got something to suit every driver’s taste.

            Our covers are built with quality materials to withstand everyday wear while giving your car a modern, polished look. Located right here in Hornsby, we pride ourselves on offering locals easy access to affordable, road-legal plate cover options that combine protection, style, and personality.

            From commuters to car enthusiasts, we help drivers showcase their individuality on the road — because your plates deserve more than just a frame.</p>
        </div>
        </div>
        <div className='mt-6 mb-6 text-2xl font-sans'>
            <h1 className='text-center'> Our Teams</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-4 p-4'>
                {Teams.map((team) => (
                    <div key={team.id}className='bg-white flex flex-col items-center text-center rounded-xl shadow-lg p-6 hover:scale-105 transition-transform' >
                        <img src={team.img} alt="" className='w-64 h-82 object-cover rounded-lg mb-4'/>
                        <h2 className='text-lg font-semibold'>{team.name}</h2>
                        <p className='text-sm'>{team.role}</p>

                    </div>
                )
            )}

            </div>

        </div>
        

    </div>
  )
}
