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
            <div className="lg:columns-3 p-12 mx-12">
                <div className='card'>
                    <img className="w-381 p-5" src="/dining.png" />
                    <h2 className="card-title justify-center">Bedroom!</h2>
                </div>
                <div className='card'>
                    <img className="w-381 p-5" src="/living.png" />
                    <h2 className="card-title justify-center">Living!</h2>
                </div>
                <div className='card'>
                    <img className="w-381 p-5" src="/bedroom.png" />
                    <h2 className="card-title justify-center">Dining!</h2>
                </div>
            </div>
        </>
    )
}
