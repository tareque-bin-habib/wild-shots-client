import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/UserContext';
import SeparateReview from '../SeparateReview/SeparateReview';


const Review = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-center fw-bold title-name mt-5'>you have {review.length} Review</h2>
            {
                review.map(reviews => <SeparateReview key={reviews._id} reviews={reviews}></SeparateReview>)
            }
        </div>
    );
};

export default Review;