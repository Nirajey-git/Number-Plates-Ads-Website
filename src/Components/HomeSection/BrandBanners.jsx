import React from 'react'


const carBrands = [
{
    id: 1,
    name: "Toyota",
    logo: "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-toyota-motor-corporation-is-a-japanese-multinational-automotive-manufacturer-automotive-regular-tal-revivo.png" 
},
{
    id: 2,
    name: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"
},
{
    id: 3,
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
},
{
    id: 4,
    name: "Audi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_detail.svg"
},
{
    id: 5,
    name: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_logo.svg"
},
{
    id: 6,
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
},
{
    id: 7,
    name: "Hyundai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Hyundai_logo.svg"
},
{
    id: 8,
    name: "Volkswagen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Volkswagen_logo_2019.svg"
},
{
    id: 9,
    name: "Nissan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nissan_2020_logo.svg"
},
{
    id: 10,
    name: "Porsche",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Porsche_logo.svg"
}
];


export const BrandBanners = () => {
return (
    <div className='w-full m-auto mt-5 '>
        <div flex justify-between items-center >
            
            <h1 className='text-2xl text-center mt-3  mb-2 font-sans font-semibold '> Top Brands We Worked With</h1>
            <hr className='mt-2'/>
            <div className='m-auto mt-4 w-full overflow-hidden mb-3  '>
                <ul className='flex gap-3 ml-4 mt-3  justify-start items-center animate-infinite-scroll animation-play-state:paused'>
                    {carBrands.map((brand ) => (
                        <li key={brand.id} >
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
