import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../image/banner/13.jpg'
import image2 from '../../image/banner/willbl_feat.jpg'
import image3 from '../../image/banner/nintchdbpict000286875803.webp'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item>
                    <div className='banner-img-1'>
                        <h2>My name is Tareque</h2>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='banner-img-2'>
                        <h2>This is second</h2>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='banner-img-3'>
                        <h2 className='text-white'>Thsis is Third</h2>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;