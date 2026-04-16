import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import App from './App.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
    path: "/",
    element: <h2>Homepage</h2>,
  },
  {
    path: "/apps",
    element: <h2>all apps</h2>
  }
      ]
    }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='bg-red-500'>Hello</h2>
    <RouterProvider router={router} />
  </StrictMode>,
)
