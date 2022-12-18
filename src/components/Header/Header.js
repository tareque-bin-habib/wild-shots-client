import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className='p-3'>
                <Container>
                    <Navbar.Brand className='fw-bold fs-3' href="#home">Wild <span className='title-name'>Shot</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto me-0 menu">
                            <Link to='/'>Home</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/signin'>Sign In</Link>
                            <Link to='/signup'>Sign up</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;