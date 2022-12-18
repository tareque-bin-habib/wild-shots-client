import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/UserContext';


const Signin = () => {
    const { signInEmail, createWithGithub, createWithGmail } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => setError('You enter a wrong password'))

    }

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        createWithGmail(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handlegitHub = () => {
        const provider = new GithubAuthProvider();
        createWithGithub(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }



    return (
        <div className='form-container'>
            <h5 className='text-center mt-5 fw-bold form-title'>Please Login</h5>
            <Form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center mt-5'>
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
                        <p>New to Wild Shot? Please  <Link to='/signup'>Signup</Link> </p>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger">
                        <p>{error}</p>
                    </Form.Text>
                </div>
            </Form>
            <div className='d-flex justify-content-center mt-3 fs-4 text-primary'>
                <Link onClick={handleGoogle}><FaGoogle className='me-3'></FaGoogle></Link>
                <Link onClick={handlegitHub}><FaGithub></FaGithub></Link>
            </div>
        </div>
    );
};

export default Signin;