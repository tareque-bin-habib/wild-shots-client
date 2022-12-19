import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const SeparateReview = ({ reviews }) => {
    const { customerName, email, area, service } = reviews
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    return (
        <div>
            <div className="card mb-3 p-4">
                <div className="row g-0">
                    <div className="col-md-4 w-25">
                        {
                            reviewService?.image &&
                            <img src={reviewService.image} className="img-fluid rounded-start" alt="..." />
                        }
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title fw-bold title-name">{customerName}</h2>
                            <p className="card-text fw-bold">{email}</p>
                            <p>{area}</p>
                            <Button className='bio-btn' size="lg">
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeparateReview;