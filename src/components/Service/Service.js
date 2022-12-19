import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './Service.css'

const Service = ({ service }) => {
    const { Price, details, image, name, ratings, _id } = service
    return (
        <div className='service-card'>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='fw-bold title-name'>{name}</Card.Title>
                    <Card.Text>
                        <p className='mt-1'>{details.slice(0, 80) + '...'}</p>
                        <p><small className='title-name fw-bold'>Ratings:</small> {ratings} Star</p>
                        <p><small className='fw-bold title-name'>Price:</small> {Price}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;