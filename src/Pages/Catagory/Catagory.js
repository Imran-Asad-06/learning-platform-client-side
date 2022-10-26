import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const course = useLoaderData()
    return (
        <div>
            this is catagory has {course.length}
        </div>
    );
};

export default Catagory;