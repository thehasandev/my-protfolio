import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RoutsLayout from '../components/common/RoutsLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element:<RoutsLayout/>,
      children:[
        {
            path: "/",
            element:<Home/>,   
        }
      ]
    },
  ]);

  export default router