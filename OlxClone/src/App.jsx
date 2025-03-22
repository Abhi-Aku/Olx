import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import {Home} from "./Pages/Home";  
import Mobile from "./Pages/Mobile";
import  PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mobile",
        element: <Mobile />,
      },
      {
        path: "/pageOne", 
        element: <PageOne />,
      },
      {
        path: "/pageTwo", 
        element: <PageTwo />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
