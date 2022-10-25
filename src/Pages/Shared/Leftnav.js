import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './leftnav.css'

const Leftnav = () => {
    const [catagories,setcatagories]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/course-catagories')
        .then(res=>res.json())
        .then(data=> setcatagories(data));
    },[])
    
    return (
        <div>
           <h2> All catagories {catagories.length}</h2>
           <div>
            {
                catagories.map(catagory=> <p className='side-p' key={catagory.id}>
                    <Link className='side-anchor' to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
           </div>
        </div>
    );
};

export default Leftnav;