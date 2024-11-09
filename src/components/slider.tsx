import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-10"
            onClick={onClick}
        >
            &rarr; {/* یا از آیکون مورد نظر استفاده کنید */}
        </div>
    );
}

// Custom Prev Arrow
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-10"
            onClick={onClick}
        >
            &larr; {/* یا از آیکون مورد نظر استفاده کنید */}
        </div>
    );
}

export default function RoomSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const slides = [
        {
            id: 1,
            img: "/category/01.jpg",
            category: "Bed Room",
            number: "01",
            title: "Inner Peace",
        },
        {
            id: 2,
            img: "/category/02.jpg",
        },
        {
            id: 3,
            img: "/category/03.jpg",
        },
    ];

    return (
        <div className="flex w-full h-full bg-[#f5f5f5] p-8">
            {/* Left Column */}
            <div className="w-1/3 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    50+ Beautiful rooms inspiration
                </h1>
                <p className="text-gray-600 mb-6">
                    Our designer already made a lot of beautiful prototype of rooms that inspire you.
                </p>
                <button className="bg-[#D2A244] text-white px-6 py-3 rounded">
                    Explore More
                </button>
            </div>

            {/* Right Column - Slider */}
            <div className="w-2/3 relative">
                <Slider {...settings} className="space-x-4">
                    {slides.map((slide) => (
                        <div key={slide.id} className="relative px-2">
                            <img
                                src={slide.img}
                                alt={`Room ${slide.id}`}
                                className="w-full h-96 object-cover rounded"
                            />
                            {slide.title && (
                                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-4 rounded">
                                    <p className="text-gray-500 text-sm">{`${slide.number} — ${slide.category}`}</p>
                                    <h2 className="text-xl font-semibold">{slide.title}</h2>
                                </div>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
