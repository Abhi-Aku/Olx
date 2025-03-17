import React from 'react'
import Layout from './Components/Layout'
import { Home } from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [{
      path : "/",
      element : <Home/>
    }
      

    ]
   
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;