import React from 'react'
import Layout from './Components/Layout'
import { Home } from './Pages/Home'
// import { Mobile } from './Pages/Mobile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [{
      path : "/",
      element : <Home/>
    },
    // {
    //   path :"/mobile",
    //   element:<Mobile/>
    // }
   


    

      

    ]
   
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;