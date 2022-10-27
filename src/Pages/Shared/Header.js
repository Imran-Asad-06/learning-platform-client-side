import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './header.css'

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='d-lg-flex justify-content-lg-between'>
              
                <Navbar.Brand className='logo'>Academy</Navbar.Brand>
              
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className='headerButton' to="/">Home</Link>
                    <Link className='headerButton' to="/content">Content</Link>
                    <Link className='headerButton' to="/blog">Blog</Link>
                    <Link className='headerButton' to="/faq">FAQ</Link>
                    
                    
                    <Link className='headerButton'>Theme</Link>

                   
                </Nav>
                <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light"  onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='headerButton' to="/login">Login</Link>
                                        <Link className='headerButton' to="/registration">Registration</Link>
                                    </>
                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
               
                </Navbar.Collapse>
              
            </Container>
    </Navbar>
    );
};

export default Header;