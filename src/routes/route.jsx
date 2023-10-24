import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RoutsLayout from '../components/common/RoutsLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';


const router = createBrowserRouter([
    {
      path: "/",
      element:<RoutsLayout/>,
      children:[
        {
            path: "/",
            element:<Home/>,   
        },
        {
            path: "*",
            element:<ErrorPage/>,   
        }
      ]
    },
  ]);

  export default router