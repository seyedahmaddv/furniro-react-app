import React from 'react'

export default function HeroSection() {
    return (
        <>
            <div className='hero relative flex h-screen'
                style={{
                    backgroundImage: "url('/scandinavian-interior-mockup-wall-decal-background 1.png')",
                }}>
                {/* ستون چپ خالی */}
                <div className="w-1/2"></div>
                <div >

                    <div className="w-1/2 flex flex-col items-start pl-8">
                        <div className='card w-96 bg-orange-100'>
                            <div className="card-body ">
                                <h2 className="text-xs font-thin">New Arrival</h2>
                                <p className="text-2xl font-bold text-yellow-600">Discover Our<br />New Collection</p>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                <div className="card-actions justify-start">
                                    <button className="btn bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-9 rounded">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >


        </>
    )
}


