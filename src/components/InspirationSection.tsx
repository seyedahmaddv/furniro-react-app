import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { categories } from '../../public/category/category';

const InspirationsComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8 p-7 bg-[#fdfbf7] overflow-hidden">
            {/* Left Column */}
            <div className="md:w-1/3 p-16 space-y-4">
                <h2 className="text-5xl font-bold text-gray-800">50+ Beautiful rooms inspiration</h2>
                <p className="text-gray-600">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">Explore More</button>
            </div>

            {/* Right Column - Swiper Slider */}
            <div className="md:w-2/3 mt-6 md:mt-0">
                <Swiper
                    centeredSlides={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="mySwiper h-[300px] md:h-[400px]"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide
                            key={item.id}
                            className={`relative transition-all duration-300 ${activeIndex === index ? 'h-full' : 'h-[90%] opacity-50'
                                } flex items-end`}
                        >
                            <img
                                src={item.image}
                                alt={item.category}
                                className={`w-full object-cover rounded-lg ${activeIndex === index ? 'h-full' : 'h-[90%]'
                                    }`}
                            />
                            {activeIndex === index && (
                                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                                    <p className="text-sm text-gray-500">
                                        0{index + 1} — {item.category}
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.category}</h3>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default InspirationsComponent;
