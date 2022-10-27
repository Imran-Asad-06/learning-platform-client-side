import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import {FaGithub } from 'react-icons/fa';
import './registration.css'

const Login = () => {
    const [error, setError] = useState('');
    const {signIn,handleGithubSignIn,providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }
    const handleGithub=()=>{
        handleGithubSignIn().then(result=>{
           console.log(result.user)
           navigate(from, {replace: true});
         }).catch(error=>{
           console.log(error)
         })
  
       }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    return (
        <div className='form-container'>
        <h2 className='form-title'>Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
        <p> New here <Link to='/registration'>Create a New Account</Link></p>

        <Button onClick={handleGoogleSignIn } className='me-2' variant="outline-primary"><FcGoogle></FcGoogle> Login With Google</Button>
        <Button onClick={handleGithub} variant="outline-success"><FaGithub></FaGithub> Login With Github</Button>
        
    </div>
    );
};

export default Login;