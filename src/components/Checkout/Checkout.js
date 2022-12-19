import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Checkout = () => {
    const service = useLoaderData();
    const { name, Price, ratings, details, image } = service;
    return (
        <div className='text-center mt-5'>
            <h1 className='mb-5 title-name'>{name}</h1>
            <img src={image} alt="" />
            <p className='fw-bold p-5'>{details}</p>
            <p className='fw-bold'>Ratings: {ratings} star</p>
            <p className='fw-bold'>Price: ${Price}</p>
        </div>
    );
};

export default Checkout;