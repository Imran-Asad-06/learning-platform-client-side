import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Catagory from "../../Pages/Catagory/Catagory";
import Home from "../../Pages/Home/Home";
import Content from "../../Component/Content"
import Blog from "../../Component/Blog";
import Login from "../../Component/Login";
import Registration from "../../Component/Registration";
import FAQ from "../../Component/FAQ";
import Course from "../../Pages/Course/Course";
import Checkout from "../../Pages/Course/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../../Component/NotFound";





export const routes = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://online-learning-platform-server-imran-asad-06.vercel.app/course')
            },
            {
                path:'/content',
                element:<Content></Content>,
                loader:()=> fetch('https://online-learning-platform-server-imran-asad-06.vercel.app/course')
               
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/checkout',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params})=> fetch(`https://online-learning-platform-server-imran-asad-06.vercel.app/course/${params.id}`)
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params})=> fetch(`https://online-learning-platform-server-imran-asad-06.vercel.app/catagories/${params.id}`)
            },
            {
                path:'/course/:id',
                element:<Course></Course>,
                loader:({params})=> fetch(`https://online-learning-platform-server-imran-asad-06.vercel.app/course/${params.id}`)
            },
             
            {
                path:"*",
                element:<NotFound></NotFound>

            }
        ]
    }

])