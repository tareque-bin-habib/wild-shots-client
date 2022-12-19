import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/UserContext';


const Checkout = () => {
    const service = useLoaderData();
    const { _id, name, Price, ratings, details, image } = service;
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const area = form.area.value;


        const review = {
            service: _id,
            serviceName: name,
            customerName: name,
            email,
            area
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Complited')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='text-center mt-5'>
            <div>
                <h1 className='mb-5 title-name'>{name}</h1>
                <img src={image} alt="" />
                <p className='fw-bold p-5'>{details}</p>
                <p className='fw-bold'>Ratings: {ratings} star</p>
                <p className='fw-bold'>Price: ${Price}</p>
                <Link to='/review'><Button variant="primary" type="submit">
                    See Your Reviews
                </Button></Link>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div>
                    <h2 className='text-center title-name fw-bold mt-5'>Review Our Photo</h2>
                    <Form onSubmit={handleReview}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" className='w-100' name='name' placeholder="Enter Your name" />
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" defaultValue={user?.email} className='w-100' name='email' placeholder="Enter Your email" readOnly />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <h5 className='fw-bold'>Please Review</h5>
                            <textarea name="area" id="" cols="100" rows="10"></textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;