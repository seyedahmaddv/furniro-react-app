import React from 'react'

export default function Categories() {
    return (
        <>
            <div>
                <div className='text-center mt-9 text-black'>
                    <h3 className='text-3xl font-black'>Browse The Range</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 p-12 mx-12">
                <div className='card'>
                    <img className="w-full h-48 object-cover" src="/dining.png" />
                    <h2 className="card-title justify-center">Bedroom!</h2>
                </div>
                <div className='card'>
                    <img className="lg:w-1/3 md:w-1/2 sm:w-full p-5" src="/living.png" />
                    <h2 className="card-title justify-center">Living!</h2>
                </div>
                <div className='card'>
                    <img className="lg:w-1/3 md:w-1/2 sm:w-full p-5" src="/bedroom.png" />
                    <h2 className="card-title justify-center">Dining!</h2>
                </div>
            </div>
        </>
    )
}
