import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='d-lg-flex justify-content-lg-between'>
               <div>
                <Navbar.Brand className='logo'>Academy</Navbar.Brand>
              
               </div>
                <div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className='headerButton' to="/">Home</Link>
                    <Link className='headerButton' to="/content">Content</Link>
                    <Link className='headerButton' to="/blog">Blog</Link>
                    <Link className='headerButton' to="/faq">FAQ</Link>
                    <Link className='headerButton' to="/registration">Registration</Link>
                    <Link className='headerButton' to="/login">Login</Link>
                    <Link className='headerButton'>Theme</Link>

                   
                </Nav>
               
                </Navbar.Collapse>
                </div>
            </Container>
    </Navbar>
    );
};

export default Header;