import React, {use, useEffect, useState} from 'react'
import cars from '../../assets/slidesImages/Cars.jpg'
import matt from '../../assets/slidesImages/matt.jpg'
import Niraj from '../../assets/slidesImages/Nirajdp.jpg'
import car from '../../assets/BlackGolf.jpg'

export const AboutHead = () => {
  const [Teams, setTeams] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(()=> {
    fetch("http://127.0.0.1:8000/api/about/")
    .then((res) => res.json())
    .then((data) => setAbout(data[0]))
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
        .then((res) => res.json())
        .then((data) => setTeams(data))
  }, []);
return (
    <div>
        <div className='flex flex-col justify-center mt-4'>
        <div className='flex justify-center items-center'>
            <img src={about.image} alt="About Images"  className='w-82 h-[320px]'/>
        </div>
        <div className='m-4 p-4'>
            <p>{about.description}</p>
        </div>
        </div>
        <div className='mt-6 mb-6 text-2xl font-sans'>
            <h1 className='text-center font-semibold'> Our Teams</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-4 p-4'>
                {Teams.map((team) => (
                    <div key={team.id}className='bg-white flex flex-col items-center text-center rounded-xl shadow-lg p-6 hover:scale-105 transition-transform' >
                        <img src={team.images} alt={team.title} className='w-64 h-64 object-cover rounded-lg mb-4'/>
                        
                        <h2 className='text-lg font-semibold'>{team.title}</h2>
                        <p className='text-sm'>{team.description}</p>

                    </div>
                )
            )}

            </div>

        </div>
        

    </div>
  )
}
