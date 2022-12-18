import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className='form-container'>
            <h5 className='text-center mt-5 fw-bold form-title'>Please SignUp</h5>
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-100' type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control className='w-100' type="text" name='image' placeholder="Enter image URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-100' type="password" name='password' placeholder="Enter Your password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password!</Form.Label>
                        <Form.Control className='w-100' type="password" name='confirm' placeholder="Confirm your Password" />
                    </Form.Group>
                    <div>
                        <p>Already have an account? <Link to='/signin'>Signin</Link> </p>
                    </div>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </div>
            </Form>
            <div className='d-flex justify-content-center mt-3 fs-4 text-primary'>
                <Link><FaGoogle className='me-3'></FaGoogle></Link>
                <Link><FaGithub></FaGithub></Link>
            </div>
        </div>
    );
};

export default Signup;