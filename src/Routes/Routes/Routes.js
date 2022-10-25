import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Catagory from "../../Pages/Catagory/Catagory";
import Checkout from "../../Pages/Course/Checkout";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/catagory/:id',
                element: <Catagory></Catagory>
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>
            }
        ]
    }

])