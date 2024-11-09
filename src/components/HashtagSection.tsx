import React from 'react';

export default function HashtagSection() {
    const images = [
        { src: "/hashtag/shlef with plants.jpg", alt: "Shelf with plants", className: "row-span-2" },
        { src: "/bedroom.png", alt: "Desk setup", className: "col-span-2" },
        { src: "/hashtag/diningroom.jpg", alt: "Armchair", className: "" },
        { src: "/dining.png", alt: "Side tables", className: "" },
        { src: "/scandinavian-interior-mockup-wall-decal-background 1.png", alt: "Dining room", className: "col-span-2" },
        { src: "/living.png", alt: "Bedroom", className: "row-span-2 col-span-2" },
        { src: "/modern-luxurious-living-room.jpg", alt: "Kitchen counter", className: "col-span-2" },
        { src: "/gray-sofa-white-living-room.jpg", alt: "Wall decoration", className: "" },
        { src: "/bright-loft-office.jpg", alt: "Kitchen shelves", className: "" },
    ];

    return (
        <div className="w-full max-h-min mx-auto my-8">
            <div className="text-center max-h-min mb-8">
                <h2 className="text-3xl font-bold mb-2">Share your setup with</h2>
                <p className="text-2xl font-semibold text-gray-700">#FuniroFurniture</p>
            </div>

            <div className="grid grid-cols-9  max-h-min gap-4 auto-rows-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative max-h-min overflow-hidden group ${image.className} bg-gray-100 rounded-lg`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="  object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute  inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
};