import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Signin = () => {
    return (
        <div className='form-container'>
            <h5 className='text-center mt-5 fw-bold form-title'>Please SignIn</h5>
            <Form className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-100' type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-100' type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <div>
                        <p>New to wild shot? Please  <Link to='/signup'>Signup</Link> </p>
                    </div>
                    <Button variant="primary" type="submit">
                        SignIn
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

export default Signin;