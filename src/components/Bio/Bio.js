import React from 'react';
import Button from 'react-bootstrap/Button';
import bioImage from '../../image/bio/annie-spratt-ogDort6vKuE-unsplash.jpg'
import './Bio.css'

const Bio = () => {
    return (
        <div className='container p-5'>
            <div className='row row-cols-lg-2 row-cols-md-2 row-cols-1 d-flex align-items-center justify-content-center'>
                <div>
                    <h1 className='fw-bold'>Photography is not an <br />
                        Exact <span className='title-name'>Science</span> </h1>
                    <p>Making good on the Glasgow Climate Pact: a call to action to achieve one gigaton of emissions reductions from forests by 2025</p>
                    <Button className='bio-btn' size="lg">
                        Learn more
                    </Button>
                </div>
                <div>
                    <img className='bio' src={bioImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Bio;