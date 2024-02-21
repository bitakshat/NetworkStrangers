import React, { useEffect, useRef } from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import carouselimage from '../../assets/images/carouselimage.png'


const Carousel = () => {

    return (
        <Glider
            draggable
            hasDots
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 390,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 414,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 415,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ]}
            className='overflow-x-hidden'
        >
            <div><img src={carouselimage} alt="carousel image" /></div>
            <div><img src={carouselimage} alt="carousel image" /></div>
            <div><img src={carouselimage} alt="carousel image" /></div>
            <div><img src={carouselimage} alt="carousel image" /></div>
            <div><img src={carouselimage} alt="carousel image" /></div>
            <div><img src={carouselimage} alt="carousel image" /></div>
            <div><img src={carouselimage} alt="carousel image" /></div>
            <div><img src={carouselimage} alt="carousel image" /></div>
        </Glider>
    )
}

export default Carousel;