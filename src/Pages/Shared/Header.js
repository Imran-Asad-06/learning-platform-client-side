import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReactSwitch from "react-switch";
import { FaBookReader } from 'react-icons/fa';
import './header.css'

export const ThemeContext = createContext(null);

const Header = () => {

    const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='d-lg-flex justify-content-lg-between'>
              
                <Navbar.Brand className='logo'><FaBookReader className='me-2'></FaBookReader>  Academy</Navbar.Brand>
              
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className='headerButton' to="/">Home</Link>
                    <Link className='headerButton' to="/content">Content</Link>
                    <Link className='headerButton' to="/blog">Blog</Link>
                    <Link className='headerButton' to="/faq">FAQ</Link>
                    
                    
                    
                    <ThemeContext.Provider value={{ theme, toggleTheme }}>
                        <div className="App" id={theme}>
                            
                            <div className="switch">
                            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                            </div>
                        </div>
                        </ThemeContext.Provider>
                    

                   
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