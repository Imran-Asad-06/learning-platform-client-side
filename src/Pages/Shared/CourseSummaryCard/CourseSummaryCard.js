import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({course}) => {
   
    const {name,id,total,logo,buy} = course;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>Price: {total} taka</p>
            <Link to={`/course/${id}`}><Button className='mb-2' variant="primary">See Details</Button></Link>
            <Button variant="primary">Download Course Details</Button>
        </Card.Body>
        </Card>
    );
};

export default CourseSummaryCard;