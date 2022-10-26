import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Catagory = () => {
    const courses = useLoaderData()
    return (
        <div>
            
            {
                courses.map(course=><CourseSummaryCard
                    key={course.id} course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Catagory;