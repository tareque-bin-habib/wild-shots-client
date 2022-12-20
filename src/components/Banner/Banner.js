import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../image/banner/13.jpg'
import image2 from '../../image/banner/willbl_feat.jpg'
import image3 from '../../image/banner/nintchdbpict000286875803.webp'
import './Banner.css'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner'>
            <div className=''>
                <Carousel>
                    <Carousel.Item>
                        <div className='banner-img-1 banner-size d-flex align-items-center justify-content-center'>
                            <h1 className='text-white'>Rise and fall of the <br /> dog-like hyenas</h1>

                        </div>


                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='banner-img-2 banner-size d-flex align-items-center justify-content-center'>
                            <h1 className='text-white'>The Cheetah’s Wild Life is <br /> very popular to all</h1>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='banner-img-3 banner-size d-flex align-items-center justify-content-center'>
                            <h1 className='text-white'>Family of Lion In the deep <br /> forest is amazing</h1>

                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
};

export default Banner;