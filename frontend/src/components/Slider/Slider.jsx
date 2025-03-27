import React, { useState } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    ];

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
        <h1 className='mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold'>Templates</h1>
            <div className="relative">
                <div className="carousel w-full">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-item w-full flex justify-center transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'}`}>
                            <img
                                src={image}
                                className="w-1/2"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`btn btn-xs ${index === currentIndex ? 'btn-active' : ''}`}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Slider;
