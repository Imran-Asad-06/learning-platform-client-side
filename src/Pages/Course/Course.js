import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Course = () => {
    const course = useLoaderData()
    const{name,logo,buy} = course
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to='/checkout'><Button variant="primary">{buy}</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default Course;