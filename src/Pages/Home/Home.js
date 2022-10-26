import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import './home.css'


const Home = () => {
    const allcourse = useLoaderData()
    return (
        <div className='courseCard'>
            
            {
                allcourse.map(course=> <CourseSummaryCard
                 key={course.id}  course={course}
                ></CourseSummaryCard>)
                
            }
        </div>
    );
};

export default Home;