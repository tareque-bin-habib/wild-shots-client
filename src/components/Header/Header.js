import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css'
import { FaUser } from "react-icons/fa";
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg" className='p-3'>
                <Container>
                    <Navbar.Brand className='fw-bold fs-3' href="#home">Wild <span className='title-name'>Shot</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto me-0 menu">
                            <Link to='/'>Home</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/blog'>Blog</Link>
                            {
                                user?.uid ?
                                    <Link onClick={logOut}><Button variant="primary">SignOut</Button></Link>
                                    :
                                    <>
                                        <Link to='/signin'>Sign In</Link>
                                        <Link to='/signup'>Sign up</Link>
                                    </>

                            }
                            {
                                user?.photoURL ?
                                    <Link title={user?.email}><Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image></Link>
                                    :
                                    <FaUser></FaUser>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

