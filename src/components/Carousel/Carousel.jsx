import React, { useEffect, useRef } from 'react';
import Glide from "@glidejs/glide"
import carouselimage from '../../assets/carouselimage.png'


const Carousel = () => {
    const glideRef = useRef(null);

    useEffect(() => {
        const glide = new Glide(glideRef.current, {
            // Glide.js options
            type: 'carousel',
            perView: 1,
            gap: 20,
            // Add more options as needed
        });

        glide.mount();
        return () => glide.destroy();
    }, []);


    return (
        <div className="glide" ref={glideRef}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide w-[100px] h-100[px]"><img src={carouselimage} alt="carouselimage" /></li>
                    <li className="glide__slide w-[100px] h-100[px]"><img src={carouselimage} alt="carouselimage" /></li>
                    <li className="glide__slide w-[100px] h-100[px]"><img src={carouselimage} alt="carouselimage" /></li>
                    {/* Add more slides as needed */}
                </ul>
            </div>
        </div>
    )
}

export default Carousel;