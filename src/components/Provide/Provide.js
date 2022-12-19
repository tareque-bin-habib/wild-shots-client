import React from 'react';
import { Button } from 'react-bootstrap';
import img1 from '../../image/photography/10-wildlife-photography-tips-for-beginners-4.avif';
import img2 from '../../image/photography/4a5235_c4b9dff3997d419cb2d4e72b54776053_mv2.webp'

const Provide = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center fw-bold'>Our PhotoGraphy</h1>
            <div className='p-5'>
                <div className="card mb-3 p-4">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title fw-bold title-name">Tiger</h2>
                                <p className="card-text fw-bold">Author: Habib Bin Rashid </p>
                                <p>This Royal Bengal Tiger from Shundarban Bangladesh</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                                <Button className='bio-btn' size="lg">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 p-4">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img2} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title title-name fw-bold">Snake</h2>
                                <p className="card-text fw-bold">Author: Thomas Edesan</p>
                                <p>This green snake from Amazon Brazil</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <Button className='bio-btn' size="lg">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;