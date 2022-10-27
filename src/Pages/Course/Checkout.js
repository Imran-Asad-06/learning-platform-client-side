import React from 'react';
import {useLoaderData} from "react-router-dom";
import toast from "react-hot-toast"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Checkout = () => {
     const course=useLoaderData();
     const {name,id} = course

    return (
        <div className="bg-white mt-5 d-flex">
           <LineChart width={500} height={500} data={course.data} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
                <XAxis dataKey="name" />
                <YAxis/>
                <Line type="monotone" dataKey="purchase" stroke="#8884d8" activeDot={{ r: 8 }} />
                 <Tooltip/>
           </LineChart>
           <div>

            <h3>{name}</h3>
            <h3>{id}</h3>
              <h1 className="fs-5 bg-info rounded p-1 mt-5">This Chart Shows How many People Bought  {course.course_name} This Year</h1>
                <button onClick={()=>{
                    toast.success("Purchased SuccessFully")
                }} className="btn btn-info">Click To Purchase</button>
           </div>

             
        </div>
    );
};

export default Checkout;